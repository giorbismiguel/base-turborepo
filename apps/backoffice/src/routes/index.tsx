import { memo, Suspense } from 'react';
import { PageLoader } from 'mui-react-common';
import { RouteLoader } from 'security';
import { routes } from './main.routes';


function Routes() {

  return (
    <Suspense fallback={<PageLoader size="screen"/>}>
      <RouteLoader routes={routes}/>
    </Suspense>
  );
}

export default memo(Routes);
