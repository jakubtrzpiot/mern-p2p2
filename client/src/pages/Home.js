import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';

export const Home = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      currentUser ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  return <Link to="/login"></Link>;
};
