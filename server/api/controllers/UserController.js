import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const signUp = async (req, res) => {
  // const user = req.body


  // newUser
  //   .save()
  //   .then((user) => {
  //     res.redirect('/');
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
};

const logIn = (req, res) => {
  User.find({ email: req.body.email })
    .then((user) => {
      res.redirect('/');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export { signUp, logIn };
