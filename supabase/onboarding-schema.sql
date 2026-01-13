-- Client Onboarding System Tables
-- Run this after the main schema.sql

-- Vouchers table
CREATE TABLE vouchers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'discount', 'credit', 'free_setup', 'feature_unlock'
  value INTEGER, -- percentage or amount
  description TEXT,
  expires_at TIMESTAMPTZ,
  max_uses INTEGER DEFAULT 1,
  used_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active', -- 'active', 'expired', 'used'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Onboarding tokens (secure one-time links)
CREATE TABLE onboarding_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Onboarding submissions
CREATE TABLE onboarding_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  token_id UUID REFERENCES onboarding_tokens(id),
  status TEXT DEFAULT 'pending', -- 'pending', 'in_review', 'approved', 'rejected'
  progress INTEGER DEFAULT 0, -- 0-100 percentage
  business_details JSONB,
  operational_info JSONB,
  payment_info JSONB,
  additional_requirements TEXT,
  submitted_at TIMESTAMPTZ,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Doctors/Staff profiles
CREATE TABLE doctors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID NOT NULL REFERENCES onboarding_submissions(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  designation TEXT NOT NULL,
  education TEXT,
  experience_years INTEGER,
  specializations TEXT[],
  achievements TEXT,
  working_hours JSONB,
  fee_structure JSONB,
  profile_photo_url TEXT,
  certifications_urls TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID NOT NULL REFERENCES onboarding_submissions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  price INTEGER,
  duration INTEGER, -- in minutes
  special_instructions TEXT,
  thumbnail_url TEXT,
  gallery_urls TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Onboarding files
CREATE TABLE onboarding_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID NOT NULL REFERENCES onboarding_submissions(id) ON DELETE CASCADE,
  file_type TEXT NOT NULL, -- 'logo', 'clinic_photo', 'banner', 'certificate', 'license', etc.
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_vouchers_client_id ON vouchers(client_id);
CREATE INDEX idx_vouchers_code ON vouchers(code);
CREATE INDEX idx_vouchers_status ON vouchers(status);
CREATE INDEX idx_onboarding_tokens_token ON onboarding_tokens(token);
CREATE INDEX idx_onboarding_tokens_client_id ON onboarding_tokens(client_id);
CREATE INDEX idx_onboarding_submissions_client_id ON onboarding_submissions(client_id);
CREATE INDEX idx_onboarding_submissions_status ON onboarding_submissions(status);
CREATE INDEX idx_doctors_submission_id ON doctors(submission_id);
CREATE INDEX idx_services_submission_id ON services(submission_id);
CREATE INDEX idx_onboarding_files_submission_id ON onboarding_files(submission_id);

-- Apply updated_at trigger to onboarding_submissions
CREATE TRIGGER update_onboarding_submissions_updated_at 
BEFORE UPDATE ON onboarding_submissions 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to generate unique voucher code
CREATE OR REPLACE FUNCTION generate_voucher_code()
RETURNS TEXT AS $$
DECLARE
  code TEXT;
  exists BOOLEAN;
BEGIN
  LOOP
    -- Generate code like: NEXTMEET-XXXX (where X is random alphanumeric)
    code := 'NEXTMEET-' || upper(substring(md5(random()::text) from 1 for 6));
    
    -- Check if code already exists
    SELECT EXISTS(SELECT 1 FROM vouchers WHERE vouchers.code = code) INTO exists;
    
    -- Exit loop if unique
    EXIT WHEN NOT exists;
  END LOOP;
  
  RETURN code;
END;
$$ LANGUAGE plpgsql;

-- Function to generate secure onboarding token
CREATE OR REPLACE FUNCTION generate_onboarding_token()
RETURNS TEXT AS $$
DECLARE
  token TEXT;
  exists BOOLEAN;
BEGIN
  LOOP
    -- Generate 32-character random token
    token := encode(gen_random_bytes(24), 'base64');
    token := replace(token, '/', '_');
    token := replace(token, '+', '-');
    
    -- Check if token already exists
    SELECT EXISTS(SELECT 1 FROM onboarding_tokens WHERE onboarding_tokens.token = token) INTO exists;
    
    -- Exit loop if unique
    EXIT WHEN NOT exists;
  END LOOP;
  
  RETURN token;
END;
$$ LANGUAGE plpgsql;

-- Function to check if token is valid
CREATE OR REPLACE FUNCTION is_token_valid(token_value TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  token_record RECORD;
BEGIN
  SELECT * INTO token_record
  FROM onboarding_tokens
  WHERE token = token_value
    AND used = FALSE
    AND expires_at > NOW();
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;
