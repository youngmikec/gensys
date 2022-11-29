import { Category } from "./category";
import { User } from "./user";

export type Product = {
    id: string;
    name: string;
    shortName: string;
    code: string;
    sku: string;
    category: Category;
    make: string;
    price: number;
    discount: number;
    quantity: number;
    description: string;
    productImage: string;
    supplier: User;
    isActive: boolean; 
    isFeatured: boolean; 
    isPromoted: boolean; 
    isTrending: boolean; 
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}