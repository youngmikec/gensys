import { GIFTCARD_STATUS, GIFTCARD_TYPE } from "./enum";
import { User } from "./user";

export type GCurrency = {
    _id: string;
    name: string;
    rate: number;
}

export type Giftcard = {
    id: string;
    name: string;
    code: string;
    rate: number;
    bankName: string;
    accountName: string;
    accountNumber: string;
    giftcardImage: string;
    type: GIFTCARD_TYPE;
    currencies: GCurrency[];
    status: GIFTCARD_STATUS;
    paymentDescription: string;
    paymentSteps: [];
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}