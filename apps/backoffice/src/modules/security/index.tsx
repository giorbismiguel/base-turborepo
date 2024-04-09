import routes from 'modules/security/routes';
import { RouteLoader } from 'security';


const Module = () => {
    return (<RouteLoader routes={routes} notfoundRedirect={'/security'} memory />);
};

export default Module;
