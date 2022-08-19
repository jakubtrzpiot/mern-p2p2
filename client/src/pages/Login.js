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
    <div className="flex justify-center items-center flex-col mx-auto">
      <p className="text-white text-4xl mb-10">Log In</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-2 flex flex-col w-[280px]"
      >
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
      <Hr className="w-[280px] pt-4 pb-6" content="or" />
      <Button className="w-[280px]" content="Google" />
    </div>
  );
};
