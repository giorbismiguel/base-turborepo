import { useContext, useCallback, useEffect } from "react";
import { SecurityContext } from "../contexts/SecurityContext";
import { ApiClientService, StorageService } from "../services";
import { setAuthData } from "../services/TokenService";
import { AuthResult } from "../types/auth";
import { SecurityProps } from "../contexts/Security";

type Auth = {
  setAuth: (authData: AuthResult) => void;
  logout: () => Promise<void>;
};

const useAuth = (): Auth => {
  const context: SecurityProps = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error("useSecurity must be used within a SecurityProvider");
  }
  const { loadUser } = context;

  const setAuth = useCallback(
    (authData: AuthResult) => {
      setAuthData(authData);
      loadUser();
    },
    [loadUser]
  );

  const logout = useCallback(async () => {
    ApiClientService.removeToken();
    await StorageService.clear();
    loadUser();
  }, [loadUser]);

  return {
    setAuth,
    logout,
  };
};

export default useAuth;
