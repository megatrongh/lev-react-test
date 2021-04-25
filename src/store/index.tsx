import React, { createContext, useEffect, useReducer } from 'react';
import { STORE_ACTION_TYPES } from './actions';
import {
  playlistReducer,
  tracksReducer,
  userReducer,
  utilsReducer,
} from './reducers';

const initialState = JSON.parse(
  localStorage.getItem('levLocalState') ||
    JSON.stringify({
      user: {
        name: '',
        email: '',
        token: '',
      },
      playlists: [],
      tracks: [],
      utils: {
        notification: '',
        isPlayBoxOpen: false,
      },
    })
);

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<STORE_ACTION_TYPES>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { user, playlists, tracks, utils }: InitialStateType,
  action: STORE_ACTION_TYPES
) => ({
  user: userReducer(user, action),
  playlists: playlistReducer(playlists, action),
  tracks: tracksReducer(tracks, action),
  utils: utilsReducer(utils, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  useEffect(() => {
    localStorage.setItem('levLocalState', JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
