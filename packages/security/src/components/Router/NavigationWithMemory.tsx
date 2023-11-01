import React from 'react';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { NavigationWithMemoryProps } from './router.types';

const loginPath = process.env.REACT_APP_LOGIN_PATH || '/auth/login';

const NavigationWithMemory = ({ memory, to }:NavigationWithMemoryProps) => {
  let location = useLocation();
  if (!memory)
    return <Navigate to={to} />;
  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  return <Navigate to={to} state={{ from: location }} replace />;
};

export default NavigationWithMemory;


NavigationWithMemory.defaultProps = {
  to: loginPath
};
