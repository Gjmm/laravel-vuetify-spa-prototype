import Dashboard from './components/base/Dashboard';
import Users from './components/base/Users';

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Dashboard
        },

        {
            path: '/users',
            component: Users
        }
    ]
}