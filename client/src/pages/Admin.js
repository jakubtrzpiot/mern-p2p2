import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuth, getAllUsers } from '../api/UserApi';
import { Button } from '../components/CustomComponents';
import { UserComponent } from '../components/UserComponent';
import { UsersList } from '../components/UsersList';
import { AdminUserView } from '../components/AdminUserView';

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
    getAllUsers({ permission: admin.permission })
      .then(res => setUsers(res))
      .catch(err => console.log(err));
  }, [navigate, admin.permission]);

  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col w-full h-full p-4 lg:flex-row-reverse">
      <div className="flex items-center pb-4 lg:self-start lg:gap-4 lg:flex-row-reverse">
        <UserComponent user={admin} func={onSignOut} className="grow" />
        <Link to={'/u/' + admin.id}>
          <Button content="To Dashboard" />
        </Link>
      </div>
      <AdminUserView />
      <UsersList
        header="All Users"
        users={users}
        type="del"
        className="pt-2 lg:pt-0"
      />
    </div>
  );
};
