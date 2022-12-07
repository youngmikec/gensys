import { Product } from "./product";
import { User } from "./user";

export type ProductItem = {
    _id: string;
    qty: number;
    product: Product;
    totalAmount: number;
}

export type Order = {
    id: string;
    code: string;
    productItems: ProductItem[];
    checkOutMethod: string;
    status: string;
    totalAmount: number;
    user: User;
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}