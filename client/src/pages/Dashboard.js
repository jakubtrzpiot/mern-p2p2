import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../components/User';
import { Button } from '../components/CustomComponents';
import { isAuth } from '../api/UserApi';

export const Dashboard = props => {
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
    <div className="grid grid-cols-3 grid-rows-4 w-full h-full">
      <User
        className=""
        user={user}
        status="online"
        notifs=""
        bgcolor="bg-purple-400"
        small
      />
      <Button
        className="col-start-3 row-start-1 self-start justify-self-end"
        func={onSignOut}
        content="Sign Out"
      />
    </div>
  );
};
