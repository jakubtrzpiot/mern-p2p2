import React from 'react';

const Button = props => {
  const { className, func, content, icon } = props;
  return (
    <button
      onClick={func}
      className={`py-2 px-4 rounded-md bg-white hover:bg-primary hover:text-white hover:cursor-pointer transition ${className}`}
    >
      {content}
    </button>
  );
};

const Input = props => {
  const { className, name, isPassword, content, register } = props;
  return (
    <div className="flex flex-col">
      <label className="text-white py-1" htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        {...register}
        name={name}
        className={`py-2 px-4 rounded-md outline-none ${className}`}
        type={isPassword ? 'password' : 'text'}
        placeholder={content}
      />
    </div>
  );
};

const Hr = props => {
  const { className, content } = props;
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="flex-grow border-t border-white"></div>
      <span className="flex-shrink mx-4 text-white">{content}</span>
      <div className="flex-grow border-t border-white"></div>
    </div>
  );
};

export { Button, Input, Hr };
