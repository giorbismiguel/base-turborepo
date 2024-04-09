import { TabRouteType } from "security";

export const accountTabs: TabRouteType[] = [
  {
    path: "/users/:id/general",
    to: "/general",
    label: "tabs.general",
    translate: true,
  },
  {
    path: "/users/:id/security",
    to: "/security",
    label: "tabs.security",
    translate: true,
  },
];
