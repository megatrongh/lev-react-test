type Image = {
  url: string;
};
type Artist = {
  name: string;
};
type Track = {
  id: number;
  name: string;
  images: Image[];
  artists: Artist[];
  release_date: string;
  addedToPlaylist?: boolean;
  playlistId?: number | null;
};
type PlaylistItem = {
  id: number;
  name: string;
  tracks: Track[];
};
type User = {
  name: string;
  email: string;
  token: string;
};

type UserAction = {
  type: string;
  payload: User;
};
type TrackAction = {
  type: string;
  payload: Track[] | Track;
};

type PlaylistTrack = {
  playlist: PlaylistItem;
  track: Track;
};

type PlaylistTrackAction = {
  type: string;
  payload: {
    playlist: PlaylistItem;
    track: Track;
  };
};

type PlaylistItemAction = {
  type: string;
  payload: PlaylistItem;
};

type UtilsAction = {
  type: string;
  payload: CommonUtils;
};

type InitialStateType = {
  user: User;
  playlists: PlaylistItem[];
  tracks: Track[];
  utils: CommonUtils;
};

type CommonUtils = {
  notification?: string;
  isPlayBoxOpen?: boolean;
  openType?: 'CREATE' | 'ADD' | '';
  selectedTrack?: Track | null;
};
