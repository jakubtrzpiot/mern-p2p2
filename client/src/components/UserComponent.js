import React from 'react';

export const UserComponent = props => {
  const { className, avatar, user, func } = props;
  const { username } = user;
  // let stcolor = '';
  // switch (status) {
  //   case 'zw':
  //     stcolor = 'bg-yellow-400';
  //     break;
  //   case 'online':
  //     stcolor = 'bg-green-500';
  //     break;
  //   case 'dnd':
  //     stcolor = 'bg-red-600';
  //     break;
  //   default:
  //     stcolor = 'bg-gray-500';
  //     break;
  // }

  return (
    <div className={`${className} flex justify-start items-center self-start`}>
      {avatar == null ? (
        <div
          onClick={func}
          className={`flex justify-center items-center text-white text-4xl w-14 h-14 z-10 rounded-full bg-blue-400 border-2 border-solid border-white hover:cursor-pointer`}
        >
          {username ? username[0].toUpperCase() : null}
        </div>
      ) : (
        <img
          onClick={func}
          src={avatar}
          className="object-cover rounded-full w-14 h-14 z-10 border-2 border-solid border-white hover:cursor-pointer"
          alt=""
        />
      )}
      {/* <div
        className={`${stcolor} flex -ml-7 mt-12 w-7 h-7 rounded-full z-20  justify-center items-center text-white text-sm border-2 border-solid border-white`}
      >
        {notifs}
      </div> */}
    </div>
  );
};
