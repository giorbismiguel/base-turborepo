import React, { ReactNode, useEffect } from "react";
import { ApiClientService } from "../services";
import { useAuth } from "../hooks";

const AuthControl = ({ children }: { children?: ReactNode | undefined }) => {
  const { logout } = useAuth();

  useEffect(() => {
    const unsubscribe = ApiClientService.onError((error) => {
      if (error.status === 401 && ApiClientService.ACCESS_TOKEN_KEY)
        logout().then();
    });
    return unsubscribe;
  }, [logout]);

  return <>{children}</>;
};

export default AuthControl;
