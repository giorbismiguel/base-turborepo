import {UserDetails, UserList} from 'modules/users/pages';

const routes = {
    UserDetail: {
        path: '/:id/*',
        component: UserDetails
    },
    UserList: {
        path: '/',
        component: UserList
    }
};

export default routes;
