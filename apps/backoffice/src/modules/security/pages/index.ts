import { lazy } from 'react';

const loadRoleList = () => import('modules/security/pages/RoleList');
export const RoleList = lazy(loadRoleList);

const loadRoleDetails = () => import('modules/security/pages/RoleDetails');
export const RoleDetails = lazy(loadRoleDetails);
