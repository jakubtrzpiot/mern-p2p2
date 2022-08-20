import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { UserComponent } from '../components/UserComponent';
import { UsersList } from '../components/UsersList';
import { Chat } from '../components/Chat';

export const Dashboard = props => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      !currentUser ? navigate('/login') : setUser(currentUser),
    );
  }, [navigate]);

  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <UserComponent user={user} func={onSignOut} className="lg:order-last" />
      <UsersList />
      <Chat />
      {user.permission === 'admin' ? (
        <Link to={'/admin'}>
          <Button content="To Admin" />
        </Link>
      ) : null}
    </div>
  );
};
