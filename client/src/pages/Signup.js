import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { SignupForm } from '../components/SignupForm';

export const Signup = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) =>
      isLoggedIn ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  return <SignupForm />;
};
