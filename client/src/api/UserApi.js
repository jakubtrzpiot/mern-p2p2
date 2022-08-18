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

const userDelete = id => {
  return new Promise((resolve, reject) => {
    axios
      .post('/userDelete', id)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const isAuth = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/isAuth', {
        headers: { 'x-access-token': localStorage.getItem('token') },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const updateUser = () => {};

export { signUp, logIn, userDelete, isAuth };
