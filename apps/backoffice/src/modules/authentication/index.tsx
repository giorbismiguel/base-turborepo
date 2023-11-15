import { RouteLoader } from 'security';
import routes from 'modules/authentication/routes';

function Module() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <RouteLoader notfoundRedirect="/auth/login" routes={routes} />;
}

export default Module;
