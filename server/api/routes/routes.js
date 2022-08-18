import {
  signUp,
  logIn,
  isAuth,
  getUsers,
  userDelete,
  auth,
} from '../controllers/UserController.js';

const routes = app => {
  app.route('/login').post(logIn);
  app.route('/signup').post(signUp);
  app.route('/isAuth').all(auth).get(isAuth);
  app.route('/admin').get(getUsers);
  app.route('/userDelete').post(userDelete);
};

export default routes;
