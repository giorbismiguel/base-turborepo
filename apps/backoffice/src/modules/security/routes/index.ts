
import { RoleList , RoleDetails} from 'modules/security/pages';

const routes = {
    RoleList: {
        path: '/roles',
        component: RoleList
    },
    RoleDetails: {
        path: '/roles/:id',
        component: RoleDetails
    },
};    


export default routes;
