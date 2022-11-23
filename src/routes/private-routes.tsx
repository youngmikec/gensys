import { RouteType } from "./auth-routes";
import Profile from "../pages/admin/profile";
import NotFoundPage from "../pages/Not-found";
import Dashboard from "../pages/admin/dashboard";
import UserDetailPage from "../pages/admin/user-detail";
import UsersPage from "../pages/admin/users";


export const privateRoutes: RouteType[] = [
    {
        path: '/dashboard',
        component: <Dashboard />
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
