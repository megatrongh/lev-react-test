import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { AppContext } from '../store';
import { removePlaylist } from '../store/creators';

export interface Props {}

const PlaylistDetails: React.FC<Props> = () => {
  const {
    state: { playlists },
    dispatch,
  } = useContext(AppContext);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const playlist = playlists.find((p) => p.id === Number(id));
  const handlePlaylistRemove = () => {
    dispatch(removePlaylist(playlist as PlaylistItem));
    return history.push('/playlists');
  };
  return (
    <Layout>
      <>
        <div className='playlist-jumbo'>
          <h1 className='playlist-heading'>
            {playlist?.name}
            <span onClick={handlePlaylistRemove} className='delete-btn'>
              Delete playlist
            </span>
          </h1>
        </div>
        <div className='tracks'>
          {playlist?.tracks.map((t) => (
            <Card track={t} key={t.id} showDelete playlist={playlist} />
          ))}
        </div>
      </>
    </Layout>
  );
};

export default PlaylistDetails;
