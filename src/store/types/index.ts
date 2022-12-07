import { Category, CryptoCurrency, Order, Product, User } from "../../model";

export type CategoriesState = {
    value: Category[]
}
export type ProductsState = {
    value: Product[]
}
export type CryptosState = {
    value: CryptoCurrency[]
}

export type OrdersState = {
    value: Order[]
}
export type UsersState = {
    value: User[]
}