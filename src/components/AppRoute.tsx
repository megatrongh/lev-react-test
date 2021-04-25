import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../store';
export interface Props {
  component?: React.FC;
  path: string;
  redirect?: string;
  exact?: boolean;
}

const AppRoute: React.FC<Props> = ({ component, path, exact }) => {
  const {
    state: {
      user: { token },
    },
  } = useContext(AppContext);
  const isLoggedIn = !!token;
  return isLoggedIn ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/login' />
  );
};

export default AppRoute;
