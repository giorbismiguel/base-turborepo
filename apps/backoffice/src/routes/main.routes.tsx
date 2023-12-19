import type { RouteConfig } from "security";
import { lazy } from "react";
import { TermsConditions } from "modules/anonymous";

// const loadMainApp = () => import('routes/MainApp');
// export const MainApp = lazy(loadMainApp);

const loadAuthApp = () => import("routes/AuthApp");
export const AuthApp = lazy(loadAuthApp);

export const routes: RouteConfig = {
  Auth: {
    path: "/auth/*",
    onlyAnonymous: true,
    component: AuthApp,
  },
  anonymous: {
    path: "/terms-conditions",
    component: TermsConditions,
  },
  // MainLayout: {
  //     path: '*',
  //     authenticated: true,
  //     component: MainApp
  // }
};
