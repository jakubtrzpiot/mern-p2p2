import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../components/User';
import { Button, Input } from '../components/CustomComponents';
import { isAuth } from '../api/UserApi';

export const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) => {
      isLoggedIn ? setUser(currentUser) : navigate('/login');
    });
  }, [navigate]);

  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="grid grid-cols-3 grid-rows-4 w-screen">
      <User
        className="m-10"
        user={user}
        status="online"
        notifs=""
        bgcolor="bg-purple-400"
        small
      />
      <Button
        className="m-10 col-start-3 row-start-1 self-start justify-self-end"
        func={onSignOut}
        content="Sign Out"
      />
    </div>
  );
};
