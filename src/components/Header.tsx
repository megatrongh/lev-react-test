import React, { useContext } from 'react';
import { AppContext } from '../store';
import { logout } from '../store/creators';
export interface Props {}

const Header: React.FC<Props> = () => {
  const {
    state: {
      user: { name },
    },
    dispatch,
  } = useContext(AppContext);
  const handleLogout = () => {
    dispatch(logout({ name: '', email: '', token: '' }));
  };
  return (
    <div id='header'>
      <h4>{name}</h4>
      <span className='logout-btn' onClick={handleLogout}>
        Logout
      </span>
    </div>
  );
};

export default Header;
