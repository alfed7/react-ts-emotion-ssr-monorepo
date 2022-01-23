import React from 'react';
import { Route } from 'react-router';
import RouteElementWithLayout from './RouteElementWithLayout';

export function renderRoutes(routes: any) {
  console.log(routes);
  return routes ? (
      routes.map((route: any, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          element={
            <RouteElementWithLayout
              component={route.component}
              layout={route.layout}
              menuCreator={route.menuCreator}
              //route={route}
              // render={props =>
              //   route.render ? (
              //     route.render({ ...props, ...extraProps, route: route })
              //   ) : (
              //     <route.component {...props} {...extraProps} route={route} />
              //   )
              // }
            />}
        >{renderRoutes(route.children)}</Route>
      ))
  ) : null;
}