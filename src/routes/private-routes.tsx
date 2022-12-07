import { RouteType } from "./auth-routes";

// pages
import UsersPage from "../pages/admin/users";
import Profile from "../pages/admin/profile";
import NotFoundPage from "../pages/Not-found";
import Dashboard from "../pages/admin/dashboard";
import AdminCryptosPage from "../pages/admin/cryptos";
import CategoriesPage from "../pages/admin/categories";
import AdminProductsPage from "../pages/admin/products";
import UserDetailPage from "../pages/admin/user-detail";
import AdminOrdersPage from "../pages/admin/orders-page";
import AdminProductDetail from "../pages/admin/product-detail";


export const privateRoutes: RouteType[] = [
    {
        path: '/dashboard',
        component: <Dashboard />
    },
    {
        path: '/categories',
        component: <CategoriesPage />
    },
    {
        path: '/cryptos',
        component: <AdminCryptosPage />
    },
    {
        path: '/orders',
        component: <AdminOrdersPage />
    },
    {
        path: '/orders/:id',
        component: <AdminOrdersPage />
    },
    {
        path: '/crm-products',
        component: <AdminProductsPage />
    },
    {
        path: '/crm-products/:id',
        component: <AdminProductDetail />
    },
    {
        path: '/users',
        component: <UsersPage />
    },
    {
        path: '/users/:id',
        component: <UserDetailPage />
    }, 
    {
        path: '/profile',
        component: <Profile />
    },
    
    {
        path: '*',
        component: <NotFoundPage />
    }

];
