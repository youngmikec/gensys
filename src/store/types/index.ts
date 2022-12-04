import { Category, CryptoCurrency, Product, User } from "../../model";

export type CategoriesState = {
    value: Category[]
}
export type ProductsState = {
    value: Product[]
}
export type CryptosState = {
    value: CryptoCurrency[]
}
export type UsersState = {
    value: User[]
}