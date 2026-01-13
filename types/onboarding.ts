// Onboarding System Type Definitions

export interface Voucher {
    id: string
    code: string
    clientId: string | null
    type: 'discount' | 'credit' | 'free_setup' | 'feature_unlock'
    value: number | null
    description: string | null
    expiresAt: string | null
    maxUses: number
    usedCount: number
    status: 'active' | 'expired' | 'used'
    createdAt: string
}

export interface OnboardingToken {
    id: string
    clientId: string
    token: string
    expiresAt: string
    used: boolean
    usedAt: string | null
    createdAt: string
}

export interface OnboardingSubmission {
    id: string
    clientId: string
    tokenId: string | null
    status: 'pending' | 'in_review' | 'approved' | 'rejected'
    progress: number
    businessDetails: BusinessDetails | null
    operationalInfo: OperationalInfo | null
    paymentInfo: PaymentInfo | null
    additionalRequirements: string | null
    submittedAt: string | null
    reviewedAt: string | null
    createdAt: string
    updatedAt: string
}

export interface BusinessDetails {
    businessName: string
    category: string
    yearEstablished: number | null
    description: string
    address: string
    googleMapLocation: string | null
    phone: string
    email: string
    website: string | null
    logoUrl: string | null
    clinicPhotos: string[]
    bannerUrl: string | null
}

export interface Doctor {
    id: string
    submissionId: string
    fullName: string
    designation: string
    education: string | null
    experienceYears: number | null
    specializations: string[]
    achievements: string | null
    workingHours: WorkingHours | null
    feeStructure: FeeStructure | null
    profilePhotoUrl: string | null
    certificationsUrls: string[]
    createdAt: string
}

export interface WorkingHours {
    monday?: { start: string; end: string; available: boolean }
    tuesday?: { start: string; end: string; available: boolean }
    wednesday?: { start: string; end: string; available: boolean }
    thursday?: { start: string; end: string; available: boolean }
    friday?: { start: string; end: string; available: boolean }
    saturday?: { start: string; end: string; available: boolean }
    sunday?: { start: string; end: string; available: boolean }
}

export interface FeeStructure {
    consultationFee: number
    followUpFee: number | null
    onlineFee: number | null
}

export interface Service {
    id: string
    submissionId: string
    name: string
    category: string | null
    description: string | null
    price: number | null
    duration: number | null
    specialInstructions: string | null
    thumbnailUrl: string | null
    galleryUrls: string[]
    createdAt: string
}

export interface OperationalInfo {
    workingHours: WorkingHours
    breakTimes: { start: string; end: string }[]
    offDays: string[]
    appointmentAvailability: string
    staffSchedule: string | null
    consultationModes: ('online' | 'offline' | 'both')[]
}

export interface PaymentInfo {
    paymentMethods: ('cash' | 'upi' | 'card' | 'netbanking')[]
    consultationFees: number | null
    additionalFees: { name: string; amount: number }[]
}

export interface OnboardingFile {
    id: string
    submissionId: string
    fileType: string
    fileName: string
    fileUrl: string
    fileSize: number | null
    uploadedAt: string
}

// Form step data types
export interface OnboardingFormData {
    step1: BusinessDetails | null
    step2: Doctor[]
    step3: Service[]
    step4: OperationalInfo | null
    step5: PaymentInfo | null
    step6: string | null
    step7: OnboardingFile[]
}

// API Response types
export interface VoucherResponse {
    success: boolean
    data?: Voucher
    error?: string
}

export interface TokenResponse {
    success: boolean
    data?: {
        token: string
        expiresAt: string
        onboardingUrl: string
    }
    error?: string
}

export interface SubmissionResponse {
    success: boolean
    data?: OnboardingSubmission
    error?: string
}
