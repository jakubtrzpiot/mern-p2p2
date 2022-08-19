import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../api/UserApi';

const Home = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) =>
      isLoggedIn ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);
  return <></>;
};

export { Home };
