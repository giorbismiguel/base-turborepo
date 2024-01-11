import { memo, Suspense } from "react";
import { AuthenticationModule } from "modules/index";
import PageLoader from "../components/PageLoader";
import AuthLayout from "../layouts/AuthLayout";

function MainApp() {
  return (
    <AuthLayout>
      <Suspense fallback={<PageLoader size="page" />}>
        <AuthenticationModule />
      </Suspense>
    </AuthLayout>
  );
}

export default memo(MainApp);
