import React from 'react';

export const User = (props) => {
  const { className, avatar, username, status, notifs, bgcolor } = props;
  let stcolor = '';
  switch (status) {
    case 'zw':
      stcolor = 'bg-yellow-400';
      break;
    case 'online':
      stcolor = 'bg-green-500';
      break;
    case 'dnd':
      stcolor = 'bg-red-600';
      break;
    default:
      stcolor = 'bg-gray-500';
      break;
  }

  return (
    <div
      className={`my-5 flex justify-start items-center self-start ${className}`}
    >
      {avatar == null ? (
        <div
          className={`flex justify-center items-center text-white text-5xl w-20 h-20 z-10 rounded-full bg-blue-400 border-2 border-solid border-white`}
        >
          {username.charAt(0).toUpperCase()}
        </div>
      ) : (
        <img
          src={avatar}
          className="object-cover rounded-full w-20 h-20 z-10 border-2 border-solid border-white"
          alt=""
        />
      )}

      <div
        className={`flex -ml-7 mt-12 w-7 h-7 rounded-full z-20 ${stcolor} justify-center items-center text-white text-sm border-2 border-solid border-white`}
      >
        {notifs}
      </div>
      <div
        className={`flex -ml-3 h-14 rounded-r-xl pl-6 pr-4 text-xl ${bgcolor} text-white self-center justify-center items-center border-2 border-solid border-white`}
      >
        {username}
      </div>
    </div>
  );
};
