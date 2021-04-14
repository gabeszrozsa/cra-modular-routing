import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { authRoutes } from "../auth/auth.routes";
import { employeeRoutes } from "../employee/employee.routes";

const APP_ROUTES: Routes = [authRoutes, employeeRoutes];

const renderRoutes = (routes: Routes) => (
  <Switch>
    {routes.map((route, i) => {
      const Guard = route.guard || React.Fragment;
      const Layout = route.layout || React.Fragment;
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Guard>
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            </Guard>
          )}
        />
      );
    })}
  </Switch>
);

const getRandomToken = () => Math.random().toString().slice(2, 8);

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to={`/auth/forgot-password/${getRandomToken()}`}>
              Forgot password
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/employee/protected">Protected</Link>
          </li>
        </ul>

        {renderRoutes(APP_ROUTES)}
      </div>
    </BrowserRouter>
  );
};

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export default Router;
