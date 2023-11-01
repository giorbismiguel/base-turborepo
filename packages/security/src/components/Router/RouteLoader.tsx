// @ts-nocheck
import React, { memo } from 'react';
import map from 'lodash/map';
import { Route, Routes } from 'react-router-dom';
import SecureRoute from './SecureRoute';
import { getPaths } from '../../utils/rute';
import NavigationWithMemory from './NavigationWithMemory';
import { RouteLoaderProps } from './router.types';

const RouteLoader = ({ routes, prefix, notfoundRedirect, memory }:RouteLoaderProps) => {

  const routesChildren = map(routes, ({
                                        path,
                                        authenticated,
                                        onlyAnonymous,
                                        redirect,
                                        permissions,
                                        atLessOne,
                                        notfoundRedirect,
                                        data,
                                        element,
                                        component,
                                        ...route
                                      }, key) =>
    (
      <Route
        key={key}
        path={getPaths(prefix, path)}
        {...route}
        element={<SecureRoute
          authenticated={authenticated}
          onlyAnonymous={onlyAnonymous}
          permissions={permissions}
          atLessOne={atLessOne}
          redirect={redirect}
          data={data}
          element={element}
          component={component}
          notfoundRedirect={notfoundRedirect}
        />}
      />
    )
  );

  return (<Routes>
    {routesChildren}
    {notfoundRedirect && (<Route
      path='*'
      key='page_no_found'
      element={<NavigationWithMemory to={notfoundRedirect} memory={memory} />}
    />)}
  </Routes>);
};

export default memo(RouteLoader);


