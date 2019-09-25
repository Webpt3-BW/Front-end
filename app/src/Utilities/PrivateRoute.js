import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        localStorage.getItem('Token') ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to='/Login' />
        )
      }
    />
  );
};

export default PrivateRoute;