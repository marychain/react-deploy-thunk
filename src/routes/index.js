import { Users } from '../components/pages/Users/Users';
import { AddUserForm } from '../components/pages/AddUser/AddUser';

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: Users
    },
    {
        path: '/addUser',
        component: AddUserForm
    }
];