import React, { createContext } from 'react';
import { USER_KEY } from '../settings';
import { StorageService } from '../services';
import useCurrentUser from '../hooks/useMe';
import { SecurityProps, SecurityProviderProps } from './Security';

export const SecurityContext = createContext({
  isLoading: false,
  setUser: () => {
  },
  loadUser: () => {
  },
  hasToken: false
} as SecurityProps);

const getUserFromStorage = () => {
  let user = StorageService.getItem(USER_KEY);
  if (user)
    try {
      return JSON.parse(user);
    } catch (e) {
      //ignoring
    }
  return null;
};

export const setUser = (value: any) => {
  if (value)
    try {
      StorageService.setItem(USER_KEY, JSON.stringify(value));
    } catch (e) {

    }
  else {
    StorageService.removeItem(USER_KEY);
  }
};

const SecurityProvider = ({ useMe, children }: SecurityProviderProps) => {
  const { user, loadUser, isLoading, hasToken } = useMe(getUserFromStorage(), setUser);

  return (<SecurityContext.Provider value={
      {
        user,
        isLoading,
        setUser,
        loadUser,
        hasToken
      }
    }>
      {children}
    </SecurityContext.Provider>
  );
};


export { SecurityProvider };

SecurityProvider.defaultProps = {
  useMe: useCurrentUser
};