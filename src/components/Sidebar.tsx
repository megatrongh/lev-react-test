import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { AppContext } from '../store';
import { handleOpen } from '../store/creators';

export interface Props {}

const Sidebar: React.FC<Props> = () => {
  const { dispatch } = useContext(AppContext);
  const handleOnClick = () => {
    dispatch(
      handleOpen({
        isPlayBoxOpen: true,
        openType: 'CREATE',
        selectedTrack: null,
      })
    );
  };
  return (
    <aside id='sidebar'>
      <div id='logo-container'>
        <Link to='/home'>
          <img id='logo' src={logo} alt='logo' />
        </Link>
      </div>
      <div>
        <NavLink activeClassName='active-link' to='/home' className='link'>
          Home
        </NavLink>
        <NavLink activeClassName='active-link' to='/playlists' className='link'>
          Playlists
        </NavLink>
        <hr className='divider' />
        <span className='link' onClick={handleOnClick} id='create-playlist'>
          Create Playlist
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
