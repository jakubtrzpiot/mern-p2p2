import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserComponent } from './UserComponent';
import { Button } from './CustomComponents';
import { userDelete } from '../api/UserApi';

const add = <FontAwesomeIcon icon={faPlus} />;
const del = <FontAwesomeIcon icon={faTrash} />;

export const UsersList = props => {
  const { header, users, type, className } = props;
  return (
    <div
      className={`flex flex-col gap-6 text-white overflow-auto lg:w-[340px] ${className}`}
    >
      <h1 className="hidden self-center text-2xl lg:block">{header}</h1>
      {users && !users.message
        ? users.map(user => {
            return (
              <div key={user._id} className="flex gap-4 items-center">
                <UserComponent user={user} />
                <div className="grow">
                  <p>{user.username}</p> <p>{user.email}</p>{' '}
                </div>
                {type ? (
                  <Button
                    func={
                      type === 'del'
                        ? userDelete.bind(this, { id: user._id })
                        : null
                    }
                    className="text-black"
                    content={del}
                  ></Button>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};
