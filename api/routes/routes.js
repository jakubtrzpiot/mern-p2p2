import {
  listAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from '../controllers/UserController.js';

const routes = (app) => {
  // get and post request for /todos endpoints
  app.route('/users').get(listAllUsers).post(createNewUser);

  // put and delete request for /todos endpoints
  app.route('/user/:id').put(updateUser).delete(deleteUser);
};

export default routes;
