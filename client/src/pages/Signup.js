import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { SignupForm } from '../components/SignupForm';

export const Signup = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      currentUser ? navigate('/u/' + currentUser.id) : null
    );
  }, [navigate]);

  return (
    <SignupForm
      label="font-normal"
      form="relative z-10"
      input="placeholder:font-normal"
      button="font-normal"
    />
  );
};
