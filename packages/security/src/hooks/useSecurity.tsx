import { useCallback } from "react";
import useUser from "./useUser";
import { hasPermission as baseHasPermission } from "../utils/permissions";

type UseSecurity = {
  isAuthenticated: boolean;
  hasPermission: (
    permissions: string | string[],
    atLessOne?: boolean
  ) => boolean;
};

const useSecurity = (): UseSecurity => {
  const { isAuthenticated, user } = useUser();
  const hasPermission = useCallback(
    (permissions: string | string[], atLessOne?: boolean) => {
      if (!isAuthenticated) return false;
      return baseHasPermission(user?.permissions, permissions, atLessOne);
    },
    [user]
  );

  return {
    isAuthenticated,
    hasPermission,
  };
};

export default useSecurity;
