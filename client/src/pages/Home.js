import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button, Hr } from '../components/CustomComponents';
import { SignupForm } from '../components/SignupForm';

export const Home = props => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   isAuth().then(({ currentUser }) =>
  //     currentUser
  //       ? navigate('/u/' + currentUser.id, { replace: true })
  //       : localStorage.visited
  //       ? navigate('/login', { replace: true })
  //       : (localStorage.visited = true),
  //   );
  // }, [navigate]);

  return (
    <div className="flex w-full h-full p-4 flex-col items-center justify-center lg:flex-row lg:justify-between lg:max-w-[1280px] lg:mx-auto">
      <h1 className="text-6xl font-extrabold text-center px-6 pb-16 pt-20 md:text-8xl md:py-12 text-transparent bg-clip-text bg-[length:400%] animate-bg-animation bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600">
        <p>Connect</p> <p>with</p> <p>anyone,</p> <p>anywhere</p>
      </h1>
      <div className="flex flex-col md:hidden">
        <Link to="/signup">
          <Button
            className="py-6 px-10 text-xl w-full text-transparent bg-clip-text bg-[length:400%] animate-bg-animation bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600"
            content="Join us today!"
          />
        </Link>
        <Hr content="or" className="self-center w-full py-3" />
        <Link to="/login">
          <Button
            className="py-6 px-10 text-xl w-full text-transparent bg-clip-text bg-[length:400%] animate-bg-animation bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600"
            content="Sign in!"
          />
        </Link>
      </div>
      <SignupForm
        formContainer="hidden md:block lg:-mt-24"
        signUpText="text-transparent bg-[length:400%] bg-clip-text animate-bg-animation bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600"
      />
    </div>
  );
};
