import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
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
    <div className="bg-cover w-full bg-center h-full lg:bg-homeBrowser">
      <h1 className="text-white text-6xl font-bold text-center">
        <p>Connect with</p> <p>anyone,</p> <p>anywhere</p>
      </h1>
      <Link to="/signup" className="flex lg:hidden">
        <Button className="py-6 px-12 text-xl" content="Join us today!" />
      </Link>
      <div className="hidden lg:flex">
        <SignupForm />
      </div>
    </div>
  );
};
