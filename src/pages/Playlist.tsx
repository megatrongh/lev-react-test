import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { AppContext } from '../store';

export interface Props {}

const Playlist: React.FC<Props> = () => {
  const {
    state: { playlists },
  } = useContext(AppContext);

  return (
    <Layout>
      <>
        <div className='playlist-jumbo'>
          <h1>My Playlist</h1>
        </div>
        <div className='playlist-rows'>
          {playlists.map(({ id, name, tracks }) => (
            <div className='playlist-row' key={id}>
              <div className='playlist-details'>
                <div className='playlist-name'>
                  {name}{' '}
                  <small className='tracks-number'>
                    ({tracks.length} track(s))
                  </small>
                </div>
                <Link className='playlist-link' to={`/playlists/${id}`}>&#8250;</Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </Layout>
  );
};

export default Playlist;
