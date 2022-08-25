import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Hr } from './CustomComponents';
import { signUp } from '../api/UserApi';

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
        'Password is weak.'
      ),
  })
  .required();

export const SignupForm = (props) => {
  const { form, signup, input, button, link, label } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    signUp(data.username, data.email, data.password)
      .then(({ message }) => {
        message ? alert(message) : navigate('/login');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={`max-w-md w-full py-12 px-4 ${form}`}>
      <p className={`text-white font-bold text-6xl pb-20 ${signup}`}>Sign up</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 font-bold"
      >
        <Input
          register={{ ...register('username') }}
          name="username"
          content="Enter your username"
          className={`${input}`}
          label={`${label}`}
        />
        <p className="text-white font-normal">{errors.username?.message}</p>
        <Input
          register={{ ...register('email') }}
          name="email"
          content="Enter your email"
          className={`${input}`}
          label={`${label}`}
        />
        <p className="text-white font-normal">{errors.email?.message}</p>
        <Input
          register={{ ...register('password') }}
          name="password"
          content="Enter your password"
          isPassword
          className={`${input}`}
          label={`${label}`}
        />
        <p className="text-white font-normal">{errors.password?.message}</p>
        <Button className={`mt-5 mb-3 ${button}`} content="Sign up" />
      </form>
      <div className="text-white text-center">
        Already have an account?{' '}
        <Link className={`text-primary ${link}`} to="/login" replace="true">
          Sign in
        </Link>
      </div>
      {/* <Hr className="pt-7 pb-10" content="or Sign up with" />
      <Button className="w-full" content="Google" /> */}
    </div>
  );
};
