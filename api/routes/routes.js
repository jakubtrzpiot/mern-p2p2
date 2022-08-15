import {
  listAllUsers,
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  updateUser,
  deleteUser,
} from '../controllers/UserController.js';

const routes = (app) => {
  // get and post request for /todos endpoints
  app.route('/admin').get(listAllUsers);
  app.route('/login').post(logInWithEmailAndPassword);
  app.route('/signup').post(signUpWithEmailAndPassword);

  // put and delete request for /todos endpoints
  app.route('/user/:id').put(updateUser).delete(deleteUser);
};

export default routes;
