import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./Routes";
const ScreenRoute = () => {
  return (
    <Suspense fallback={<h2>...Loading</h2>}>
      <Switch>
        {Routes.map((route, i) => {
          return (
            <Route
              key={route.title + i}
              path={`/secured${route.path}`}
              exact={route.path === "/" ? true : false}
            >
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default ScreenRoute;
