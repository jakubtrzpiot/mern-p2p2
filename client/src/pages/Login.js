import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { LoginForm } from '../components/LoginForm';

export const Login = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      currentUser ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  return <LoginForm />;
};
