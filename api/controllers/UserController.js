import User from '../models/User.js';

const listAllUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const createNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'User successfully deleted' });
    })
    .catch((err) => {
      return res.status(404).send(err);
    });
};

export { listAllUsers, createNewUser, updateUser, deleteUser };
