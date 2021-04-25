import React, { useContext } from 'react';
import { AppContext } from '../store';
import { handleOpen, removeTrackFromPlaylist } from '../store/creators';
export interface Props {
  track: Track;
  showDelete?: boolean;
  playlist?: PlaylistItem;
}

const Card: React.FC<Props> = ({ track, showDelete, playlist }) => {
  const { dispatch } = useContext(AppContext);
  const handleOnClick = () => {
    dispatch(
      handleOpen({ isPlayBoxOpen: true, openType: 'ADD', selectedTrack: track })
    );
  };
  const handleRemove = () => {
    dispatch(
      removeTrackFromPlaylist({ playlist: playlist as PlaylistItem, track })
    );
  };
  return (
    <div className='card'>
      <div className='details'>
        <img src={track.images[0].url} alt={track.name} />
        <div className='title'>{track.name}
        </div>
        <div className='date'>{track.release_date}</div>
        {showDelete && (
          <div className='remove-track-icon' onClick={handleRemove}>
            &#128465;
          </div>
        )}
        <div
          className='add-icon'
          onClick={track.addedToPlaylist ? () => null : handleOnClick}
        >
          {track.addedToPlaylist && <b>&#10003;</b>}
          {!track.addedToPlaylist && <b>&#43;</b>}
        </div>
      </div>
    </div>
  );
};

export default Card;
