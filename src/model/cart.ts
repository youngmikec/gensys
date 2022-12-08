import { Product } from "./product";
import { User } from "./user"


export type CartItem = {
    _id: string;
    qty: number;
    product: Product;
    totalAmount: number;
}


export type Cart = {
    id: string;
    code: string;
    user: User;
    products: CartItem[];
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}