const { User } = require('../models');
const { auth } = require('../utils');
const { validateNewLogin, validateCreateNewUser } = require('./validations/validationInputValues');

const login = async (userCredentials) => {
  const error = validateNewLogin(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({ where: { email: userCredentials.email } });
  
  if (!user || user.password !== userCredentials.password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { email } = user;
  const token = auth.createToken({ email });
  return { status: 'SUCCESSFUL', data: { token } };
};

const creteNewUser = async (userCredentials) => {
  const error = validateCreateNewUser(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({ where: { email: userCredentials.email } });
  
  if (user && userCredentials.email === user.email) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  await User.create(userCredentials);

  const { displayName, email } = userCredentials;
  const token = auth.createToken({ displayName, email });

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', data: users };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  login,
  creteNewUser,
  getAll,
  getById,
};
