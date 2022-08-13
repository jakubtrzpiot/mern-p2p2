import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './components/User';
import { Button, Input } from './components/CustomComponents';

export const App = () => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  let navigate = useNavigate();

  // REWRITE TO FIT OUR NODEJS BACKEND //

  /* onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsername(user.displayName);
      setAvatar(user.photoURL);
    } else {
      navigate('/login', { replace: true });
    } 
  });
  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.code);
      });
  };
  const user = auth.currentUser;
  const onUpdateProfile = (e) => {
    e.preventDefault();
    let obj = {};
    let { username, avatar } = e.target;
    username.value
      ? (obj.displayName = username.value)
      : (obj.displayName = user.displayName);
    avatar.value
      ? (obj.photoURL = avatar.value)
      : (obj.photoURL = user.photoURL);
    updateProfile(user, obj).then(() => {
      // Update successful.
      setUsername(user.displayName);
      setAvatar(user.photoURL);
      e.target.reset(); //Clear inputs
    });
  };
  */
  //check if current password matches then update user password
  const onUpdatePassword = (e) => {
    e.preventDefault();
    let { password, newPassword, reNewPassword } = e.target;
    console.log(newPassword.value);
    /* if (newPassword.value === reNewPassword.value && newPassword !== '') {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password.value
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          // User re-authenticated.
          console.log(e.target);
          updatePassword(user, newPassword.value)
            .then(() => {
              alert('Password changed.');
              navigate('/login', { replace: true });
            })
            .catch((error) => {
              // An error ocurred
              alert(error.code);
            });
        })
        .catch((error) => {
          // An error ocurred
          alert(error.code);
        });
    } else {
      alert('Password do not match');
    }
    e.target.reset();
  };

  //delete the user avatar
  const onDeleteAvatar = () => {
    updateProfile(user, { photoURL: '' }).then(() => {
      setAvatar(user.photoURL);
    });
    */
  };

  return (
    <div className="bg-[#222222] h-screen grid grid-cols-3 grid-rows-4">
      <User
        className="mx-10 my-10"
        avatar={avatar}
        username={username}
        status="online"
        notifs=""
        bgcolor="bg-purple-400"
      />
      <Button
        className="mx-10 my-10 col-start-3 row-start-1 self-start justify-self-end"
        //func={onSignOut}
        content="Sign Out"
      />
      <div className="col-start-2 row-start-2 flex justify-center">
        <form
          className="w-[280px] flex flex-col justify-center"
          //onSubmit={onUpdateProfile}
        >
          <Input name="username" content="Enter new name" />
          <Input name="avatar" content="Enter new avatar URL" />
          <Button content="Update Profile" />
        </form>
        <div className="flex flex-col justify-center items-center">
          <Button
            className="ml-2 w-40"
            //func={onDeleteAvatar}
            content="Delete Avatar"
          />
        </div>
      </div>
      <form
        onSubmit={onUpdatePassword}
        className="w-[280px] col-start-2 row-start-3 flex flex-col justify-center justify-self-center"
      >
        <Input name="password" isPassword content="Enter your password" />
        <Input name="newPassword" isPassword content="Enter new password" />
        <Input name="reNewPassword" isPassword content="Confirm new password" />
        <Button content="Change Password" />
      </form>
    </div>
  );
};
