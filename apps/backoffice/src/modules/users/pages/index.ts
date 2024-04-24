import { lazy } from 'react';

const loadRoleDetail = () => import('modules/users/pages/RoleDetail');
export const RoleDetail = lazy(loadRoleDetail);

const loadUserDetails = () => import('modules/users/pages/UserDetailsPage');
export const UserDetails = lazy(loadUserDetails);

const loadUserSecurity = () => import('modules/users/pages/UserSecurity');
export const UserSecurity = lazy(loadUserSecurity);

const loadUserList = () => import('modules/users/pages/UserList');
export const UserList = lazy(loadUserList);
