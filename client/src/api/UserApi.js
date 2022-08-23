import axios from 'axios';
const server = process.env.REACT_APP_SERVER_URL;

const signUp = (username, email, password) => {
  const user = {
    username: username,
    email: email,
    password: password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(server + '/signup', user)
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
      .post(server + '/login', user)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const userDelete = id => {
  return new Promise((resolve, reject) => {
    axios
      .post(server + '/userDelete', id)
      .then(res => resolve(res.data), window.location.reload())
      .catch(err => reject(err));
  });
};

const isAuth = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(server + '/isAuth', {
        headers: { 'x-access-token': localStorage.getItem('token') },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

//CHANGE TO AWAIT AND TRY/CATCH
const getFriends = user => {
  return new Promise((resolve, reject) => {
    axios
      .get(server + '/dashboard', { params: user })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const getAllUsers = admin => {
  return new Promise((resolve, reject) => {
    axios
      .get(server + '/admin', { params: admin })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const updateUser = () => {};

export {
  signUp,
  logIn,
  userDelete,
  isAuth,
  getFriends,
  getAllUsers,
  updateUser,
};
