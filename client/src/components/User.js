import React from 'react';

export const User = props => {
  const { className, avatar, user, status, notifs, bgcolor, small } = props;
  const { username, email } = user;
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
    <div className={`${className} flex justify-start items-center self-start `}>
      {avatar == null ? (
        <div
          className={`flex justify-center items-center text-white text-5xl w-16 h-16 z-10 rounded-full bg-blue-400 border-2 border-solid border-white`}
        >
          {username ? username[0].toUpperCase() : null}
        </div>
      ) : (
        <img
          src={avatar}
          className="object-cover rounded-full w-16 h-16 z-10 border-2 border-solid border-white"
          alt=""
        />
      )}
      {/* <div
        className={`${stcolor} flex -ml-7 mt-12 w-7 h-7 rounded-full z-20  justify-center items-center text-white text-sm border-2 border-solid border-white`}
      >
        {notifs}
      </div> */}
      <div
        className={`${bgcolor} ${
          small ? 'hidden' : ''
        } flex flex-col -ml-3 h-14 rounded-r-xl pl-6 pr-4  text-white self-center justify-center items-center border-2 border-solid border-white`}
      >
        <p className="text-xl">{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
