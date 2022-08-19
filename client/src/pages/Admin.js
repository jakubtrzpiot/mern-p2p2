import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDelete, isAuth } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { User } from '../components/User';

const Admin = props => {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    isAuth().then(({ isLoggedIn, currentUser }) => {
      isLoggedIn ? setAdmin(currentUser) : navigate('/login');
    });
    const fetchData = async () => {
      await axios
        .get('/admin')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    };
    fetchData();
  }, [navigate]);

  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="grid grid-cols-3 grid-rows-6 w-screen">
      <User
        className="m-10"
        user={admin}
        status="online"
        notifs=""
        bgcolor="bg-purple-400"
      />
      <Button
        className="m-10 col-start-3 row-start-1 self-start justify-self-end"
        func={onSignOut}
        content="Sign Out"
      />
      <div className="m-10 p-2 row-start-2 row-span-2 col-start-2 overflow-y-scroll flex flex-col gap-5 text-white">
        <div>
          <p>Username</p>
          <p>Email </p>
          <p>Delete? </p>
        </div>
        {users.map(({ _id, username, email }) => {
          return (
            <div className="flex">
              <p>{username}</p> <p>{email}</p>{' '}
              <input value={_id} type="checkbox" />
            </div>
          );
        })}
      </div>
      <Button
        className="row-start-4 col-start-2 self-start mx-auto"
        content="Wyjeb zaznaczone"
      />
    </div>
  );
};

export { Admin };
