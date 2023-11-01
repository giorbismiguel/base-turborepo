import { RouteLoader } from 'components/Router';
import routes from 'modules/authentication/routes';

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={"/auth/login"} />;
};

export default Module;
