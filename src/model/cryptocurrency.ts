import { User } from "./user";

export type CryptoCurrency = {
    id: string;
    code: string;
    name: string;
    shortName: string;
    walletAddress: string;
    exchangePlatform: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    rate: number;
    cryptoImage: string;
    barcode: string;
    currencies: Array<{name: string, rate: number}>;
    networks: Array<{networkName: string, networkId: string}>;
    status: string;
    paymentDescription: string;
    paymentSteps: any[];
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}