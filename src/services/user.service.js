const { User } = require('../models');
const auth = require('../utils/auth');
const schema = require('./validations/validationInputValues');

const login = async (userCredentials) => {
  const error = schema.validateNewLogin(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({
    where: {
      email: userCredentials.email,
    },
  });
  
  if (!user || user.password !== userCredentials.password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { email } = user;
  const token = auth.createToken({ email });
  if (!token) {
    return;
  }
  return { status: 'SUCCESSFUL', data: { token } };
};

const creteNewUser = async (userCredentials) => {
  const error = schema.validateCreateNewUser(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({
    where: {
      email: userCredentials.email,
    },
  });
  
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

module.exports = {
  login,
  creteNewUser,
  getAll,
};
