import { signUp, logIn } from '../controllers/UserController.js';

const routes = (app) => {
  app.route('/login').post(logIn);
  app.route('/signup').post(signUp);
};

export default routes;
