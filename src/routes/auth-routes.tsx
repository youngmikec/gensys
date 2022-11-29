import { ReactNode } from "react";

// pages
import Home from "../pages/home";
import CartPage from "../pages/cart";
import Rating from "../pages/rating";
import ProductsPage from "../pages/products";
import ServicePage from "../pages/service-page";
import ProductsDetail from "../pages/products/product-detail";
import SignIn from "../pages/sign-in";
import NotFoundPage from "../pages/Not-found";
import AdminLogin from "../pages/admin/login";


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
    {
        path: '/sign-in',
        component: <SignIn /> 
    },
    {
        path: '/crm-login',
        component: <AdminLogin />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }

];