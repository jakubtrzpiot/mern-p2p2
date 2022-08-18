import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../components/CustomComponents';
import { User } from '../components/User';
import { userDelete } from '../api/UserApi';

const Admin = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get('/admin')
				.then(res => setUsers(res.data))
				.catch(err => console.log(err));
		};
		fetchData();
	}, []);

	const onUserDelete = (id) => {
		const user = { id:id }
		userDelete(user)
	}

	return (
		<div className="p-10 flex flex-col gap-5">
			{users.forEach(user => {
				return (
					<div className='flex items-center'>
						<User
							username = { user.username }
							email = { user.email }
						/>
						<div>
							{console.log(user._id)}
							<Button
								func = { onUserDelete(user._id) }
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export { Admin };
