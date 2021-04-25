import { ACTIONS } from './actions';

export const login = (payload: User): UserAction => ({
  type: ACTIONS.LOGIN,
  payload,
});

export const logout = (payload: User): UserAction => ({
  type: ACTIONS.LOGOUT,
  payload,
});

export const addTracks = (payload: Track[]): TrackAction => ({
  type: ACTIONS.ADD_TRACKS,
  payload,
});

export const handleOpen = (payload: CommonUtils): UtilsAction => ({
  type: ACTIONS.HANDLE_OPEN,
  payload,
});

export const handleNotification = (payload: CommonUtils): UtilsAction => ({
  type: ACTIONS.NOTIFY,
  payload,
});

export const createPlaylist = (payload: PlaylistItem): PlaylistItemAction => ({
  type: ACTIONS.CREATE_PLAYLIST,
  payload,
});

export const addTrackToPlaylist = (
  payload: PlaylistTrack
): PlaylistTrackAction => ({
  type: ACTIONS.ADD_TRACK_TO_PLAYLIST,
  payload,
});

export const removeTrackFromPlaylist = (
  payload: PlaylistTrack
): PlaylistTrackAction => ({
  type: ACTIONS.REMOVE_TRACK_FROM_PLAYLIST,
  payload,
});

export const removePlaylist = (payload: PlaylistItem): PlaylistItemAction => ({
  type: ACTIONS.REMOVE_PLAYLIST,
  payload,
});
