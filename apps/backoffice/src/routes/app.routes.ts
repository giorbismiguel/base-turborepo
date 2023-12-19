// import {UserModule, ContentModule, SecurityModule} from 'modules';
import type { RouteConfig } from "security";
import TestComponent from "modules/test/TestComponent";

const appRoutes: RouteConfig = {
  // Security: {
  //     path: "/security/*",
  //     exact: false,
  //     component: SecurityModule,
  // },
  // Account: {
  //     path: "/users/*",
  //     exact: false,
  //     component: UserModule,
  // },
  // Content: {
  //     path: "/content/*",
  //     exact: false,
  //     component: ContentModule,
  // },
  Rest: {
    path: "/*",
    exact: false,
    // @ts-ignore
    component: TestComponent,
  },
};

export default appRoutes;
