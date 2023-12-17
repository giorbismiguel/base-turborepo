import { memo, Suspense } from 'react';
import { RouteLoader } from 'security';
import { PageLoader } from 'mui-react-common';
import { MainLayout } from 'layouts';
import appRoutes from './app.routes';

function MainApp() {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <RouteLoader notfoundRedirect="/" routes={appRoutes} />
      </Suspense>
    </MainLayout>
  );
}

export default memo(MainApp);
