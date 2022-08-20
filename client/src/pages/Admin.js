import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth, getUsers } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { UserComponent } from '../components/UserComponent';
import { UsersList } from '../components/UsersList';

export const Admin = props => {
  const [admin, setAdmin] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth().then(({ currentUser }) =>
      !currentUser
        ? navigate('/login')
        : currentUser.permission !== 'admin'
        ? navigate('/u/' + currentUser.id)
        : setAdmin(currentUser),
    );
    getUsers({})
      .then(res => setUsers(res))
      .catch(err => console.log(err));
  }, [navigate]);

  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex items-center mb-8">
        <UserComponent
          user={admin}
          func={onSignOut}
          className="lg:order-last grow"
        />
        <Link to={'/u/' + admin.id}>
          <Button content="To Dashboard" />
        </Link>
      </div>
      <UsersList users={users} type="del" />
    </div>
  );
};
