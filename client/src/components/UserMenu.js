import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './CustomComponents';
import { UserComponent } from './UserAvatar';

export const UserMenu = props => {
  const user = { props };

  const navigate = useNavigate();
  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="right-0 bg-white h-full w-full">
      <div>
        <UserComponent user={user} menuOpen /> <p>back</p>
      </div>
      <Button
        className="col-start-3 row-start-1 self-start justify-self-end"
        func={onSignOut}
        content="Sign Out"
      />
    </div>
  );
};
