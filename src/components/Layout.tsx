import React from 'react';
import '../assets/styles/layout.css';
import Header from './Header';
import Notification from './Notification';
import PlaylistBox from './PlaylistBox';
import Sidebar from './Sidebar';

export interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div id='layout'>
      <Notification />
      <Header />
      <Sidebar />
      <aside id='main'>{children}</aside>
      <PlaylistBox />
    </div>
  );
};

export default Layout;
