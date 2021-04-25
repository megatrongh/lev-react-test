import React, { useContext, useEffect } from 'react';
import { AppContext } from '../store';
import { handleNotification } from '../store/creators';
export interface Props {}

const Notification: React.FC<Props> = () => {
  const {
    state: {
      utils: { notification },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(handleNotification({ notification: '' }));
      }, 3000);
    }
  }, [notification, dispatch]);
  return notification ? (
    <div className='notification-panel'>{notification}</div>
  ) : null;
};

export default Notification;
