import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../store';
import {
  addTrackToPlaylist,
  createPlaylist,
  handleNotification,
  handleOpen,
  removePlaylist,
} from '../store/creators';
export interface Props {}

const PlaylistBox: React.FC<Props> = () => {
  const {
    state: {
      playlists,
      utils: { isPlayBoxOpen, openType, selectedTrack },
    },
    dispatch,
  } = useContext(AppContext);

  const [showForm, setShowForm] = useState<boolean>(openType === 'CREATE');
  const [name, setName] = useState<string>('');

  const handleOnClose = () => {
    dispatch(
      handleOpen({ isPlayBoxOpen: false, openType: '', selectedTrack: null })
    );
  };

  const handlePlaylistRemove = (playlist: PlaylistItem) => {
    dispatch(removePlaylist(playlist));
  };

  const addToPlaylist = (playlist: PlaylistItem) => {
    if (selectedTrack?.playlistId === playlist.id) {
      return dispatch(
        handleNotification({
          notification: `${selectedTrack.name} is already in '${playlist.name}' playlist`,
        })
      );
    }
    dispatch(addTrackToPlaylist({ playlist, track: selectedTrack as Track }));
    handleOnClose();
    return dispatch(
      handleNotification({
        notification: `${selectedTrack?.name} added to '${playlist.name}' playlist`,
      })
    );
  };

  useEffect(() => {
    setShowForm(openType === 'CREATE');
  }, [openType]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPlaylist({ id: Date.now(), name, tracks: [] }));
    setName('');
  };

  return isPlayBoxOpen ? (
    <div className='create-playlist'>
      <div style={{ height: 20 }}>
        <span onClick={handleOnClose} className='close-btn'>
          &times;
        </span>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='text-input'
            name='name'
            value={name}
            min='2'
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            placeholder='playlist name'
          />
          <input type='submit' value='create' className='submit-btn' />
        </form>
      )}
      <div className='playlist-box'>
        <h3>My Playlists</h3>
        <hr className='divider' />
        <div className='list'>
          {playlists.map(({ id, name, tracks }) => (
            <div className='list-row' key={id}>
              <div
                className='list-name'
                onClick={() => addToPlaylist({ id, name, tracks })}
              >
                {name}
              </div>
              <div
                className='list-action'
                onClick={() => handlePlaylistRemove({ id, name, tracks })}
              >
                &#128465;
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showForm && (
        <p className='show-form-btn'>
          <span onClick={() => setShowForm(true)}>Create playlist</span>
        </p>
      )}
    </div>
  ) : null;
};

export default PlaylistBox;
