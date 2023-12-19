import { lazy } from "react";

// const loadUserModule = () => import('modules/users');
// export const UserModule = lazy(loadUserModule);

// const loadContentModule = () => import('modules/content');
// export const ContentModule = lazy(loadContentModule);

const loadAuthenticationModule = () => import("modules/authentication");
export const AuthenticationModule = lazy(loadAuthenticationModule);

// const loadSecurityModule = () => import('modules/security');
// export const SecurityModule = lazy(loadSecurityModule);
