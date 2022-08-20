import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserComponent } from './UserComponent';
import { Button } from './CustomComponents';
import { userDelete } from '../api/UserApi';

const add = <FontAwesomeIcon icon={faPlus} />;
const del = <FontAwesomeIcon icon={faTrash} />;

export const UsersList = props => {
  const { users, type } = props;
  return (
    <div className="w-full lg:w-[340px] flex flex-col gap-6">
      {users
        ? users.map(user => {
            return (
              <div
                key={user._id}
                className="flex gap-4 items-center w-full text-white  rounded-full"
              >
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
