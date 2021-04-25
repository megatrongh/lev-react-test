import { History } from 'history';
import React, { useCallback, useContext, useEffect } from 'react';
import { getProfile } from '../api';
import { AppContext } from '../store';
import { handleNotification, login } from '../store/creators';

export interface Props {
  history: History;
}

const CallbackPage: React.FC<Props> = ({ history }) => {
  const { dispatch } = useContext(AppContext);

  const getMyProfile = useCallback(
    async (token) => {
      const data = await getProfile(token);
      dispatch(login({ name: data.display_name, email: '', token }));
      history.push('/home');
    },
    [dispatch, history]
  );
  useEffect(() => {
    const query = `${history.location.hash}`.split('&')[0].slice(1);
    const token = `${query}`.split('=')[1];
    if (token) {
      getMyProfile(token);
    } else {
      history.push('/login');
      dispatch(handleNotification({ notification: 'Authentication failed!' }));
    }
  }, [history, dispatch, getMyProfile]);

  return <div>loading...</div>;
};

export default CallbackPage;
