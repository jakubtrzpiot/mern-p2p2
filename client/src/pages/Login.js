import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Hr } from '../components/CustomComponents';
import { logIn, isAuth } from '../api/UserApi';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Enter correct email.')
      .required('No email provided.'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short.'),
  })
  .required();

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    logIn(data.email, data.password)
      .then(({ token, message }) => {
        token
          ? localStorage.setItem('token', token) || window.location.reload()
          : alert(message);
      })
      .catch(err => console.log(err.message));
  };

  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) =>
      isLoggedIn ? navigate('/u/' + currentUser.id) : null,
    );
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto">
      <p className="text-white text-5xl font-bold">Log In</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
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
        <Button content="Log In" />
      </form>
      <div className="my-1 text-white">
        Don't have an account yet?{' '}
        <Link className="hover:text-primary transition" to="/signup">
          Sign up
        </Link>
      </div>
      <Hr className="" content="or" />
      <Button className="" content="Google" />
    </div>
  );
};
