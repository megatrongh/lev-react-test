import { History } from 'history';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../store';
import logo from '../assets/img/logo.png';
import '../assets/styles/login.css';
export interface Props {
  history: History;
}

const Login: React.FC<Props> = ({ history }) => {
  const {
    state: { user },
  } = useContext(AppContext);
  useEffect(() => {
    if (user.token) {
      history.push('/home');
    }
  }, [user, history]);

  return (
    <div id='login-page'>
      <div id='login-container'>
        <img src={logo} alt='logo' style={{ width: 200 }} />
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/callback&response_type=token`}
          className='submit-btn'
        >
          LOGIN WITH SPOTIFY
        </a>
      </div>
    </div>
  );
};

export default Login;
