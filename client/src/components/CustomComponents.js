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
  const { className, name, isPassword, register } = props;
  return (
    <div className="flex flex-col relative">
      <input
        {...register}
        name={name}
        className={`peer h-[68px] px-5 w-full rounded-[10px] text-white placeholder-transparent focus:outline-none bg-[#3e3b39] ${className}`}
        type={isPassword ? 'password' : 'text'}
        placeholder={name}
      />
      <label
        for={name}
        class="absolute left-5 top-[4px] text-[#BFBFBF] text-sm font-medium tracking-[.2px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-[1.4rem] peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm peer-focus:bg-primary peer-focus:rounded-[5px] peer-focus:px-2 peer-focus-visible:bg-primary peer-focus-visible:px-2 peer-focus-visible:rounded"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
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
