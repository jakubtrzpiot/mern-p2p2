import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, Input, Hr } from '../components/CustomComponents';
import { signUp } from '../api/UserApi'

const schema = yup.object({
  username: yup.string().required('No username provided.'),
  email: yup.string().email('Enter correct email.').required('No email provided.'),
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      "Password is weak."
    ),
}).required();

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()
  const onSubmit = (data) => {
    signUp(data.username, data.email, data.password)
    // navigate('/')
  };

  return (
    <div className="flex bg-[#222222] h-screen justify-center items-center flex-col">
      <p className="text-white text-4xl mb-10">Sign Up</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-2 flex flex-col w-[280px]"
      >
        <Input register={{ ...register("username") }} name="username" content="Enter your name" />
        <p className='text-white'>{errors.username?.message}</p>
        <Input register={{ ...register("email") }} name="email" content="Enter your email" />
        <p className='text-white'>{errors.email?.message}</p>
        <Input register={{ ...register("password") }} name="password" content="Enter your password" isPassword />
        <p className='text-white'>{errors.password?.message}</p>
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
