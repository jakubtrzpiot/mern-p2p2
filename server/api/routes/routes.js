import {
  signUp,
  logIn,
  isAuth,
  getFriends,
  getAllUsers,
  userDelete,
  auth,
} from '../controllers/UserController.js';

const routes = app => {
  app.route('/login').post(logIn);
  app.route('/dashboard').get(getFriends);
  app.route('/signup').post(signUp);
  app.route('/isAuth').all(auth).get(isAuth);
  app.route('/admin').get(getAllUsers);
  app.route('/userDelete').post(userDelete);
};

export default routes;
