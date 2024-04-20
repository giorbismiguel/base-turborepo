import { RoleDetail } from "modules/users/pages";
import AccountGeneral from "modules/users/containers/AccountGeneral";
import AccountSecurity from "modules/users/containers/AccountSecurity";
import type { RouteConfig } from "security";

const accountRoutes: RouteConfig = {
  general: {
    path: "/general",
    component: AccountGeneral,
  },
  security: {
    path: "/security",
    component: AccountSecurity,
  },
  notification: {
    path: "/notification",
    component: RoleDetail,
  },
};

export default accountRoutes;
