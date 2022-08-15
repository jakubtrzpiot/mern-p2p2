import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Hr } from '../components/CustomComponents';

export const Signup = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {};
  return (
    <div className="flex bg-[#222222] h-screen justify-center items-center flex-col">
      <p className="text-white text-4xl mb-10">Sign Up</p>
      <form
        method="POST"
        onSubmit={onSubmit}
        className="gap-2 flex flex-col w-[280px]"
      >
        <Input name="username" content="Enter your name" />
        <Input name="email" content="Enter your email" />
        <Input name="password" content="Enter your password" isPassword />
        <Button content="Sign Up" />
      </form>
      <div className="my-1 text-white">
        Already have an account?{' '}
        <Link className="hover:text-primary transition" to="/login">
          Log in
        </Link>
      </div>
      <Hr className="w-[280px] pt-4 pb-6" content="or" />
      <Button className="w-[280px]" content="Google" />
    </div>
  );
};
