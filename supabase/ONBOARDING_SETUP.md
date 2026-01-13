# Client Onboarding System - Database Setup

## Step 1: Run the Onboarding Schema

After you've set up the main database (from `supabase/schema.sql`), run the onboarding schema:

1. Go to: https://supabase.com/dashboard/project/iqceigotdrnqpfweuehw/sql/new
2. Open `supabase/onboarding-schema.sql`
3. Copy ALL the SQL code
4. Paste into Supabase SQL Editor
5. Click "Run"

This will create:
- `vouchers` table
- `onboarding_tokens` table
- `onboarding_submissions` table
- `doctors` table
- `services` table
- `onboarding_files` table
- Helper functions for generating codes and tokens

## Step 2: Create Storage Bucket

1. Go to: https://supabase.com/dashboard/project/iqceigotdrnqpfweuehw/storage/buckets
2. Click "New bucket"
3. Name: `onboarding-files`
4. Set to **Public** (so files are accessible)
5. Click "Create bucket"

## Step 3: Set Storage Policies

In the bucket settings, add these policies:

**Upload Policy:**
```sql
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'onboarding-files');
```

**Read Policy:**
```sql
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'onboarding-files');
```

## Verify Setup

Check that these tables exist:
- ✅ vouchers
- ✅ onboarding_tokens
- ✅ onboarding_submissions
- ✅ doctors
- ✅ services
- ✅ onboarding_files

Check that storage bucket exists:
- ✅ onboarding-files

## What's Ready

✅ Database schema
✅ API routes for vouchers
✅ API routes for tokens
✅ API routes for submissions
✅ File upload utilities
✅ TypeScript types

## Next: Phase 2

Once database is set up, we'll build:
- Voucher management page
- Send onboarding link modal
- Submissions dashboard
