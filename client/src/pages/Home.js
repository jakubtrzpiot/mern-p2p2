import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { SignupForm } from '../components/SignupForm';

export const Home = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      currentUser ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  const toSignup = () => {
    navigate('/signup')
  }

  const toLogin = () => {
    navigate('/login')
  }

  return (
    <div className="bg-homeBackground bg-cover w-full bg-center">
      <div className='max-w-xl mx-auto'>
        <h1 className='text-white text-6xl font-bold text-center mt-20 mb-10 lg:text-8xl'>
          <p>Connect</p> <p>with</p> <p>anyone</p> <p>anywhere</p>
        </h1>
      </div>
      <SignupForm/>
    </div>
  );
};
