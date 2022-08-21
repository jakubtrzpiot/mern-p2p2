import React, { useEffect } from 'react';
import { Button } from "../components/CustomComponents";
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../api/UserApi';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) =>
      isLoggedIn ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  const toSignup = () => {
    navigate('/signup')
  }

  const toLogin = () => {
    navigate('/login')
  }

  return (
    <div className="bg-homeBackground bg-cover w-full h-screen bg-center">
      <div className='max-w-xl mx-auto'>
        <h1 className='text-white text-9xl font-bold text-center mt-20 mb-10 lg:text-6xl'>
          <p>Connect</p> <p>with</p> <p>anyone</p> <p>anywhere</p>
        </h1>
      </div>
      <div className='max-w-xl mx-auto flex items-center flex-col gap-5 text-6xl lg:text-3xl text-black'>
        <Button
          className='py-6 px-12 font-bold hover:bg-orange-400'
          content='Sign up'
          func={toSignup}
        />
        <Button
          className='py-6 px-12 font-bold hover:bg-orange-400'
          content='Log in'
          func={toLogin}
        />
      </div>
    </div>
  );
};

export { Home };
