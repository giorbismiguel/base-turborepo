import routes from 'modules/users/routes';
import {RouteLoader} from 'security';


function Module() {
    return (<RouteLoader memory notfoundRedirect="/users" routes={routes}/>);
}

export default Module;
