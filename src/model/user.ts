export type User = {
    id: string;
    code: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    userType: string;
    resetCode: string;
    canResetPassword: boolean;
    balance: number;
    isProfileComplete: boolean;
    isVerified: boolean;
    accessLevel: number;
    emailNotification: boolean;
    smsNotification: boolean;
    notifications: [];

    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}