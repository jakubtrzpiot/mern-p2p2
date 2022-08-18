import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const signUp = async (req, res) => {
	const user = req.body;

	const takenEmail = await User.findOne({ email: user.email });

	if (takenEmail) {
		return res.json({ message: 'Email has already been taken.' });
	} else {
		user.password = await bcrypt.hash(req.body.password, 10);

		const newUser = new User({
			username: user.username.toLowerCase(),
			email: user.email.toLowerCase(),
			password: user.password,
		});

		newUser.save();

		const payload = {
			id: newUser._id,
			username: newUser.username,
			email: newUser.email,
		};
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 86400 },
			(err, token) => {
				if (err) return res.json({ message: err.message });
				return res.json({ token: 'Bearer' + token });
			},
		);
	}
};

const logIn = (req, res) => {
	const userLoggingIn = req.body;

	User.findOne({ email: userLoggingIn.email }).then(user => {
		if (!user) {
			return res.json({
				message: "User with this email doesn't exist",
			});
		}
		bcrypt.compare(userLoggingIn.password, user.password).then(isCorrect => {
			if (isCorrect) {
				const payload = {
					id: user._id,
					username: user.username,
					email: user.email,
				};
				jwt.sign(
					payload,
					process.env.JWT_SECRET,
					{ expiresIn: 86400 },
					(err, token) => {
						if (err) return res.json({ message: err.message });
						return res.json({ token: 'Bearer' + token });
					},
				);
			} else {
				return res.json({ message: 'Invalid password.' });
			}
		});
	});
};

const verifyJWT = (req, res, next) => {
	const token = req.headers['x-access-token']?.split(' ')[1];

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err)
				return res.json({
					isLoggedIn: false,
					message: 'Failed to Authenticate',
				});
			req.user = {};
			req.user.id = decoded.id;
			req.user.username = decoded.username;
			next();
		});
	} else {
		res.json({ message: 'Incorret token given', isLoggedIn: false });
	}
};

const isUserAuth = (req, res) => {
	return res.json({ isLoggedIn: true, username: req.user.username });
};

const getUsers = (req, res) => {
	User.find({}).then(user => res.status(200).send(user));
};

const userDelete = (req, res) => {
	const user = req.body

	User.deleteOne({_id:user.id}).then(res.json({message: 'User does not exist.'})).catch(err => console.log(err))
}

export { signUp, logIn, isUserAuth, getUsers, verifyJWT, userDelete };
