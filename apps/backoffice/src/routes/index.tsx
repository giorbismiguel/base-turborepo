import { memo, Suspense } from 'react';
import { routes } from './main.routes';
import PageLoader from '../components/PageLoader';
import { RouteLoader } from '../components/security/Router';


const Routes = () => {

  return (
    <Suspense fallback={<PageLoader size={'screen'}/>}>
      <RouteLoader routes={routes}/>
    </Suspense>
  );
};

export default memo(Routes);
