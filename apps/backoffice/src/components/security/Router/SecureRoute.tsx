import React from 'react';
import { Navigate } from 'react-router-dom';
import NavigationWithMemory from './NavigationWithMemory';
import { useSecurity } from '../../hooks';
import { RouteConfigProps } from './router.types';


const SecureRoute = ({
                       authenticated,
                       onlyAnonymous,
                       redirect,
                       permissions,
                       atLessOne,
                       notfoundRedirect,
                       data,
                       ...props
                     }: RouteConfigProps) => {

  const { isAuthenticated, hasPermission } = useSecurity();
  const { component: Component, element, disabled } = props;
  if (!Component && !element)
    throw new Error('You route setting need a component or an element option');

  const REQUIRE_AUTH = (authenticated || permissions);
  const IS_AUTH = REQUIRE_AUTH && !!isAuthenticated;

  if (REQUIRE_AUTH && !IS_AUTH)
    return <NavigationWithMemory to={redirect} memory />;

  if (onlyAnonymous && isAuthenticated)
    return <NavigationWithMemory to={redirect || '/'} />;

  const NOT_ALLOW = permissions && !hasPermission(permissions, atLessOne);

  if ((disabled || NOT_ALLOW) && notfoundRedirect)
    return <Navigate to={notfoundRedirect || '/'} />;

  if (Component) {
    if (data) {
      return (
        <Component {...data} />
      );
    }
    return <Component />;
  }
  return element;
};

export default SecureRoute;
