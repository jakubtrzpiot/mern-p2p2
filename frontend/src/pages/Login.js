import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input, Hr } from '../components/CustomComponents';

export const Login = () => {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = e.target;
     /* REWRITE TO FIT OUR NODEJS BACKEND */
     /* signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((error) => {
        alert(error.code);
      }); */
  };

  return (
    <div className="flex bg-[#222222] h-screen justify-center items-center flex-col">
      <p className="text-white text-4xl mb-10">Log In</p>
      <form onSubmit={onSubmit} className="flex flex-col w-[280px]">
        <Input name="email" content="Enter your email" />
        <Input name="password" content="Enter your password" isPassword />
        <Button content="Log In"/>
      </form>
      <div className="my-1 text-white">
        Don't have an account yet?{' '}
        <Link className="hover:text-primary transition" to="/signup">
          Sign up
        </Link>
      </div>
      <Hr className="w-[280px] pt-4 pb-6" content="or" />
      <Button className="w-[280px]" content="Google" />
    </div>
  );
};
