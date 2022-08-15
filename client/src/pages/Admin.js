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
    <div className="bg-[#222222] h-screen">
      <Button
        className="ml-2 w-40"
        // func={onCheckUsername}
        content="alert(name)"
      />
      <Button
        className="ml-2 w-40"
        // func={onCheckAvatar}
        content="alert(avatar)"
      />
      <table className="text-white flex justify-center">
        <tr className="border">
          <th className="border">
            Username
          </th>
          <th className="border">
            Email
          </th>
          <th className="border">
            Password
          </th>
        </tr>
        
      </table>
    </div>
  );
};

export { Admin };
