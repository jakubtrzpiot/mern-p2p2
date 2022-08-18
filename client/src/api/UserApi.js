import axios from 'axios';

const signUp = (username, email, password) => {
	const user = {
		username: username,
		email: email,
		password: password,
	};
	return new Promise((resolve, reject) => {
		axios
			.post('/signup', user)
			.then(res => resolve(res.data))
			.catch(err => reject(err));
	});
};

const logIn = (email, password) => {
	const user = {
		email: email,
		password: password,
	};
	return new Promise((resolve, reject) => {
		axios
			.post('/login', user)
			.then(res => resolve(res.data))
			.catch(err => reject(err));
	});
};

const isUserAuth = () => {
	return new Promise((resolve, reject) => {
		axios
			.get('/isUserAuth', {
				headers: { 'x-access-token': localStorage.getItem('token') },
			})
			.then(res => resolve(res.data))
			.catch(err => reject(err));
	});
};

export { signUp, logIn, isUserAuth };
