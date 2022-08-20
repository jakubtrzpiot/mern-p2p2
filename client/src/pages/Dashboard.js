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
    <div className="flex flex-col w-full h-full p-4 lg:flex-row-reverse">
      <div className="flex items-center pb-4 border-b-2 lg:border-0 lg:self-start lg:gap-4 lg:flex-row-reverse">
        <UserComponent user={user} func={onSignOut} className="grow" />
        {user.permission === 'admin' ? (
          <Link to={'/admin'}>
            <Button content="To Admin" />
          </Link>
        ) : null}
      </div>
      <Chat />
      <UsersList header="Friends" className="pt-4 lg:pt-0" />
    </div>
  );
};
