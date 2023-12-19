import React, { ReactNode } from "react";
import { useSecurity } from "../../hooks";

export type PermissionCheckProps = {
  permissions: string | string[];
  atLessOne?: boolean;
  children: ReactNode;
};

const PermissionCheck = ({
  permissions,
  children,
  atLessOne,
}: PermissionCheckProps) => {
  const { hasPermission, isAuthenticated } = useSecurity();
  if (!isAuthenticated) return <></>;
  const isInValid = permissions && !hasPermission(permissions, atLessOne);
  if (isInValid) return <></>;
  return <>{children}</>;
};

export default PermissionCheck;
