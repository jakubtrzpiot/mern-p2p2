import {
	signUp,
	logIn,
	isUserAuth,
	getUsers,
	verifyJWT,
	userDelete,
} from '../controllers/UserController.js';

const routes = app => {
	app.route('/login').post(logIn);
	app.route('/signup').post(signUp);
	app.route('/isUserAuth').get(verifyJWT, isUserAuth);
	app.route('/admin').get(getUsers);
	app.route('/userDelete').post(userDelete);
};

export default routes;
