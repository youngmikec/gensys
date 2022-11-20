import { ReactNode } from "react";

import Home from "../pages/home";
import CartPage from "../pages/cart";
import Rating from "../pages/rating";
import ProductsPage from "../pages/products";
import ServicePage from "../pages/service-page";
import ProductsDetail from "../pages/products/product-detail";


export type RouteType = {
    path: string;
    component: ReactNode
}

export const publicRoutes: RouteType[] = [
    {
        path: '/',
        component: <Home /> 
    },
    {
        path: '/services',
        component: <ServicePage /> 
    },
    {
        path: '/rating',
        component: <Rating /> 
    },
    {
        path: '/cart',
        component: <CartPage /> 
    },
    {
        path: '/products',
        component: <ProductsPage /> 
    },
    {
        path: '/products/:id',
        component: <ProductsDetail /> 
    },

];