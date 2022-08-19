import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Hr } from '../components/CustomComponents';
import { signUp, isAuth } from '../api/UserApi';

const schema = yup
  .object({
    username: yup
      .string()
      .required('No username provided.')
      .min(4, 'Username is too short.'),
    email: yup
      .string()
      .email('Enter correct email.')
      .required('No email provided.'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short.')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Password is weak.',
      ),
  })
  .required();

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const onSubmit = data => {
    signUp(data.username, data.email, data.password)
      .then(({ message }) => {
        message ? alert(message) : navigate('/login');
      })
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) =>
      isLoggedIn ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  return (
    <div className="max-w-md xl:max-w-lg w-full mx-auto self-center">
      <p className="text-white font-bold text-5xl mb-20">Sign up</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          register={{ ...register('username') }}
          name="username"
          content="Enter your name"
        />
        <p className="text-white">{errors.username?.message}</p>
        <Input
          register={{ ...register('email') }}
          name="email"
          content="Enter your email"
        />
        <p className="text-white">{errors.email?.message}</p>
        <Input
          register={{ ...register('password') }}
          name="password"
          content="Enter your password"
          isPassword
        />
        <p className="text-white">{errors.password?.message}</p>
        <Button content="Sign up" />
      </form>
      <div className="mt-4 text-white text-center">
        Already have an account?{' '}
        <Link className="hover:text-primary transition" to="/login">
          Log in
        </Link>
      </div>
      <Hr className="pt-7 pb-10" content="or" />
      <Button className="w-full" content="Google" />
    </div>
  );
};
