import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const signUp = async (req, res) => {
  const user = req.body;

  const takenEmail = await User.findOne({ email: user.email });
  const takenUsername = await User.findOne({ username: user.username });

  if (takenEmail) {
    return res.json({ message: 'Email has already been taken.' });
  } else if (takenUsername) {
    return res.json({ message: 'Username has already been taken.' });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });

    newUser.save();
    return res.json({ message: '' });
  }
};

const logIn = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.json({
        message: "User with this email doesn't exist",
      });
    }
    bcrypt.compare(password, user.password).then(isCorrect => {
      if (isCorrect) {
        const payload = {
          user: {
            username: user.username,
            email: user.email,
            id: user._id,
            status: user.status,
            permission: user.permission,
            friends: user.friends,
          },
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: '7 days' },
          (err, token) => {
            if (err) return res.json({ message: err.message });
            return res.json({ token: token });
          },
        );
      } else {
        return res.json({ message: 'Invalid password.' });
      }
    });
  });
};

const auth = (req, res, next) => {
  const token = req.header('x-access-token');

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          message: 'Failed to Authenticate',
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.json({ message: 'Incorret token given' });
  }
};

const isAuth = (req, res) => {
  return res.json({ currentUser: req.user });
};

const getFriends = (req, res) => {
  const user = req.query;
  if (['admin', 'user'].includes(user.permission)) {
    User.find({ username: { $in: user.friends } }).then(users =>
      res.status(200).send(users),
    );
  } else res.json({ message: 'Failed to Authenticate' });
};

const getAllUsers = (req, res) => {
  const admin = req.query;
  if (admin.permission === 'admin') {
    User.find({ permission: { $ne: 'admin' } }).then(users =>
      res.status(200).send(users),
    );
  } else res.json({ message: 'Failed to Authenticate' });
};

const userDelete = (req, res) => {
  const user = req.body;

  User.deleteOne({ _id: user.id })
    .then(res.json({ message: 'User does not exist.' }))
    .catch(err => console.log(err));
};

export { signUp, logIn, auth, isAuth, getFriends, getAllUsers, userDelete };
