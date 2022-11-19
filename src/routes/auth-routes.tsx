import { ReactNode } from "react";

import Home from "../pages/home";
import Rating from "../pages/rating";
import ProductsPage from "../pages/products";
import ServicePage from "../pages/service-page";


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
        path: '/products',
        component: <ProductsPage /> 
    },

];