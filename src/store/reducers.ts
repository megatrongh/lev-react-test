import { ACTIONS, STORE_ACTION_TYPES } from './actions';

export const userReducer = (state: User, action: STORE_ACTION_TYPES) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return { ...state, ...action.payload };
    }
    case ACTIONS.LOGOUT: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const playlistReducer = (
  state: PlaylistItem[],
  action: STORE_ACTION_TYPES
) => {
  switch (action.type) {
    case ACTIONS.CREATE_PLAYLIST: {
      return [...state, action.payload as PlaylistItem];
    }
    case ACTIONS.REMOVE_PLAYLIST: {
      const playlist = action.payload as PlaylistItem;
      return [...state.filter((p) => p.id !== playlist.id)];
    }
    case ACTIONS.ADD_TRACK_TO_PLAYLIST: {
      const { playlist, track } = action.payload as PlaylistTrack;
      const checkExistIndex = playlist.tracks.findIndex(
        (t) => t.id === track.id
      );
      if (checkExistIndex === -1) {
        const newTrack = {
          ...track,
          addedToPlaylist: true,
          playlistId: playlist.id,
        };
        const updatedPlaylist = {
          ...playlist,
          tracks: [...playlist.tracks, newTrack],
        };
        const playlistIndex = state.findIndex((p) => p.id === playlist.id);
        return [
          ...state.slice(0, playlistIndex),
          updatedPlaylist,
          ...state.slice(playlistIndex + 1),
        ];
      }
      return state;
    }
    case ACTIONS.REMOVE_TRACK_FROM_PLAYLIST: {
      const { playlist, track } = action.payload as PlaylistTrack;
      const updatedPlaylist = {
        ...playlist,
        tracks: playlist.tracks.filter((t) => t.id !== track.id),
      };
      const playlistIndex = state.findIndex((p) => p.id === playlist.id);
      return [
        ...state.slice(0, playlistIndex),
        updatedPlaylist,
        ...state.slice(playlistIndex + 1),
      ];
    }
    default:
      return state;
  }
};

export const tracksReducer = (state: Track[], action: STORE_ACTION_TYPES) => {
  switch (action.type) {
    case ACTIONS.ADD_TRACKS: {
      return [...state, ...(action.payload as Track[])];
    }
    case ACTIONS.ADD_TRACK_TO_PLAYLIST: {
      const { playlist, track } = action.payload as PlaylistTrack;
      const updatedTrack = {
        ...track,
        addedToPlaylist: true,
        playlistId: playlist.id,
      };
      const trackIndex = state.findIndex((t) => t.id === track.id);
      return [
        ...state.slice(0, trackIndex),
        updatedTrack,
        ...state.slice(trackIndex + 1),
      ];
    }
    case ACTIONS.REMOVE_TRACK_FROM_PLAYLIST: {
      const { track } = action.payload as PlaylistTrack;
      const updatedTrack = {
        ...track,
        addedToPlaylist: false,
        playlistId: null,
      };
      const trackIndex = state.findIndex((t) => t.id === track.id);
      return [
        ...state.slice(0, trackIndex),
        updatedTrack,
        ...state.slice(trackIndex + 1),
      ];
    }
    default:
      return state;
  }
};

export const utilsReducer = (
  state: CommonUtils,
  action: STORE_ACTION_TYPES
) => {
  switch (action.type) {
    case ACTIONS.HANDLE_OPEN: {
      return { ...state, ...action.payload };
    }
    case ACTIONS.NOTIFY: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
