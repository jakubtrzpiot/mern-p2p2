import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { SignupForm } from '../components/SignupForm';
import { BrowserView, MobileView } from 'react-device-detect';

export const Home = props => {
  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      currentUser
        ? navigate('/u/' + currentUser.id, { replace: true })
        : localStorage.visited
        ? navigate('/login', { replace: true })
        : (localStorage.visited = true),
    );
  }, [navigate]);

  return (
    <div className="bg-homeBackground bg-cover w-full bg-center">
      <div className='max-w-xl mx-auto'>
        <h1 className='text-white text-6xl font-bold text-center mt-20 mb-10 lg:text-8xl'>
          <p>Connect</p> <p>with</p> <p>anyone</p> <p>anywhere</p>
        </h1>
      </div>
      <SignupForm/>
    <div className="bg-cover w-full bg-center h-full lg:bg-homeBrowser">
      <h1 className="text-white text-6xl font-bold text-center">
        <p>Connect with</p> <p>anyone,</p> <p>anywhere</p>
      </h1>
      <div className="">
        <MobileView>
          <Link to="/signup">
            <Button className="py-6 px-12 text-xl" content="Join us today!" />
          </Link>
        </MobileView>
        <BrowserView>
          <SignupForm />
        </BrowserView>
      </div>
    </div>
    </div>
  );
};
