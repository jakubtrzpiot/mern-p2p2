import {
  signUp,
  logIn,
  isAuth,
  getFriends,
  getAllUsers,
  userDelete,
  auth,
} from '../controllers/UserController.js';

import { addMessage, getAllMessage } from '../controllers/MessageController.js';

const routes = (app) => {
  app.route('/login').post(logIn);
  app.route('/dashboard').get(getFriends);
  app.route('/signup').post(signUp);
  app.route('/isAuth').all(auth).get(isAuth);
  app.route('/admin').get(getAllUsers);
  app.route('/userDelete').post(userDelete);
  app.route('/addmsg').post(addMessage);
  app.route('/getmsg').post(getAllMessage);
};

export default routes;
