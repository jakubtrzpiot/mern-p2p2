import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Input } from '../components/CustomComponents';

const Admin = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/admin').then((res) => setUsers(res.data)).catch((err) => console.log(err))
    }
    fetchData()
  }, [])
  return (
    <div className="p-10 flex-col bg-[#222222] h-screen">
      <div className="flex gap-5 text-white">
        <p>Id</p>
        <p>Username</p>
        <p>Email</p>
      </div>
      {users.map((user) => {
        return (
          <div className="flex gap-5 text-white">
            <p>{user._id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </div >
  );
};

export { Admin };
