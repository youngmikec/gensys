import { Category, CryptoCurrency, Giftcard, Order, Product, User } from "../../model";

export type CategoriesState = {
    value: Category[]
}
export type CryptosState = {
    value: CryptoCurrency[]
}

export type GiftcardsState = {
    value: Giftcard[]
}

export type OrdersState = {
    value: Order[]
}

export type ProductsState = {
    value: Product[]
}

export type UsersState = {
    value: User[]
}