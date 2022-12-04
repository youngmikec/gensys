import { RouteType } from "./auth-routes";

// pages
import Profile from "../pages/admin/profile";
import NotFoundPage from "../pages/Not-found";
import Dashboard from "../pages/admin/dashboard";
import UserDetailPage from "../pages/admin/user-detail";
import UsersPage from "../pages/admin/users";
import CategoriesPage from "../pages/admin/categories";
import AdminProductsPage from "../pages/admin/products";
import AdminProductDetail from "../pages/admin/product-detail";
import AdminCryptosPage from "../pages/admin/cryptos";


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
