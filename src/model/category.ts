import { User } from "./user";

export type Category = {
    _id: string;
    id: string;
    code: string;
    name: string;
    categoryImage: string;
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}