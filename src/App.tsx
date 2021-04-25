import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import './assets/styles/app.css';
import AppRoute from './components/AppRoute';
import CallbackPage from './pages/CallbackPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import PlaylistDetails from './pages/PlaylistDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Redirect path='/' exact to='/home' />
          <Route path='/login' component={Login} />
          <Route path='/callback' component={CallbackPage} />
          <AppRoute path='/home' component={Home} />
          <AppRoute path='/playlists' exact component={Playlist} />
          <AppRoute path='/playlists/:id' component={PlaylistDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
