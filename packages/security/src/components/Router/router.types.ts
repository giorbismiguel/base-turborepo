import { ElementType, ReactElement } from "react";
import { RouteProps } from "react-router";

export type RouteConfigProps = RouteProps & {
  authenticated?: boolean;
  onlyAnonymous?: boolean;
  disabled?: boolean;
  redirect?: string;
  permissions?: string | string[];
  atLessOne?: boolean;
  notfoundRedirect?: string;
  path: string;
  exact?: boolean;
  data?: any;
  component?: ElementType;
  element?: ReactElement;
};

export type RouteMap = {
  [key: string]: RouteConfigProps;
};
export type RouteConfig = RouteConfigProps[] | RouteMap;

export type RouteLoaderProps = {
  memory?: boolean;
  notfoundRedirect?: string;
  prefix?: string;
  redirect?: string;
  routes: RouteConfig;
};

export type NavigationWithMemoryProps = {
  memory?: boolean;
  to: string;
};
