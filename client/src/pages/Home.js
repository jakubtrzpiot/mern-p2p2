import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button, Hr } from '../components/CustomComponents';
import { SignupForm } from '../components/SignupForm';

export const Home = props => {
  const navigate = useNavigate();

  // style variables
  const gradient =
    'text-transparent bg-clip-text bg-[length:400%] animate-bg-animation bg-gradient-to-r from-orange-600 via-red-400 to-yellow-600';

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
      <h1
        className={`text-6xl font-bold text-center text-white px-6 pb-16 pt-20 md:text-8xl md:py-12 lg:text-left`}
      >
        <p className="pb-2">Connect with</p>
        <p className="pb-2 lg:hidden">with</p>
        <p className={`${gradient} pb-2`}>anyone, anywhere.</p>
        {/* <p className={`${gradient} pb-2`}>anywhere.</p> */}
      </h1>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-col z-10 relative md:hidden">
        <Link to="/signup">
          <Button
            className={`py-6 px-10 text-xl text-white w-full bg-transparent`}
            content="Join us today!"
          />
        </Link>
        <Hr content="or" className="self-center w-full py-3" />
        <Link to="/login">
          <Button
            className={`py-6 px-10 text-xl text-white w-full bg-transparent`}
            content="Sign in!"
          />
        </Link>
      </div>
      <SignupForm
        form="hidden z-10 relative rounded-xl md:block"
        signup="text-orange-400"
        input="bg-transparent text-white font-normal border border-transparent focus:border-orange-400"
        button="text-xl bg-orange-500 text-white font-normal"
        link="text-orange-400 font-bold"
        label="text-white tracking-wide"
      />
    </div>
  );
};
