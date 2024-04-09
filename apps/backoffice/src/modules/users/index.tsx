import routes from 'modules/users/routes';
import {RouteLoader} from 'react-security';


const Module = () => {
    return (<RouteLoader routes={routes} notfoundRedirect={'/users'} memory/>);
};

export default Module;
