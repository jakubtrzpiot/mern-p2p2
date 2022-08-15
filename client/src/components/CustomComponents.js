import React from 'react';

const Button = (props) => {
  const { className, func, content } = props;
  return (
    <button
      onClick={func}
      className={`p-2.5 rounded-md bg-white hover:bg-primary hover:text-white hover:cursor-pointer transition ${className}`}
    >
      {content}
    </button>
  );
};

const Input = (props) => {
  const { className, name, isPassword, content } = props;
  return (
    <input
      name={name}
      className={`p-2.5 rounded-md outline-none ${className}`}
      type={isPassword ? 'password' : 'text'}
      placeholder={content}
    />
  );
};

const Hr = (props) => {
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
