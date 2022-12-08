import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({
  component: Component,
  path: pathTo,
  isLoggedIn,
  isTokenChecked,
  ...props
}) => {
  return (
    <Route path={pathTo}>
      {() => {
        // что отображаем до проверки токена
        if (!isTokenChecked) return <Preloader />;

        return isLoggedIn ? <Component {...props} /> : <Redirect to='/' />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
