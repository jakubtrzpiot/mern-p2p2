import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Hr } from '../components/CustomComponents';
import { logIn } from '../api/UserApi';

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

export const LoginForm = props => {
  const { className } = props;
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

  return (
    <div className={`max-w-md w-full py-12 px-4 ${className}`}>
      <p className="text-white font-bold text-6xl pb-20">Sign in</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input register={{ ...register('email') }} name="email" />
        <p className="text-white">{errors.email?.message}</p>
        <Input
          register={{ ...register('password') }}
          name="password"
          isPassword
        />
        <p className="text-white">{errors.password?.message}</p>
        <Button className="mt-5 mb-3" content="Sign in" />
      </form>
      <div className="text-white text-center">
        Don't have an account yet?{' '}
        <Link className="text-primary" to="/signup" replace="true">
          Sign up
        </Link>
      </div>
      {/* <Hr className="pt-7 pb-10" content="or Log in with" />
      <Button className="w-full" content="Google" /> */}
    </div>
  );
};
