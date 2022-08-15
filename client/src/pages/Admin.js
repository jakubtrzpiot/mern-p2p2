import React from 'react';

import { Button, Input } from '../components/CustomComponents';

const Admin = () => {
  //   //alert username
  //   const onCheckUsername = () => {
  //     console.log(user.displayName);
  //   };

  //   //alert avatar url
  //   const onCheckAvatar = () => {
  //     console.log(user.photoURL);
  //   };
  return (
    <div className="p-10 flex bg-[#222222] h-screen">
      <div className="gap-2 grid grid-cols-3 text-white">
        <p>Id</p>
        <p>Username</p>
        <p>Email</p>
      </div>
    </div>
  );
};

export { Admin };
