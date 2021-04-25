import React, { useCallback, useContext, useEffect } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { getTracks } from '../api';
import { AppContext } from '../store';
import { addTracks } from '../store/creators';

export interface Props {}

const Home: React.FC<Props> = () => {
  const {
    state: {
      tracks,
      user: { token },
    },
    dispatch,
  } = useContext(AppContext);
  const fetchTracks = useCallback(
    async (token) => {
      const data = await getTracks(token);
      const tracks = data as Track[];
      dispatch(addTracks(tracks));
    },
    [dispatch]
  );
  useEffect(() => {
    fetchTracks(token);
  }, [fetchTracks,token]);
  return (
    <Layout>
      <>
        <div className='content'>
          {tracks.map((track, index) => (
            <Card key={index} track={track} />
          ))}
        </div>
      </>
    </Layout>
  );
};

export default React.memo(Home);
