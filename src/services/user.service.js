const bcrypt = require('bcrypt');
const { User } = require('../models');
const { auth } = require('../utils');
const { validateLogin } = require('./validations/validationInputValues');
const creteNewUser = require('./createNewUser');

const login = async (userCredentials) => {
  const error = validateLogin(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const user = await User.findOne({ where: { email: userCredentials.email } });
  
  if (!user || bcrypt.compareSync(user.password, userCredentials.password)) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { email } = user;
  const token = auth.createToken({ email });
  return { status: 'SUCCESSFUL', data: { token } };
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

const deleteMe = async (email) => {
  await User.destroy({ where: { email } });
  return { status: 'NO_CONTENT' };
};

module.exports = { 
  login, 
  creteNewUser, 
  getAll, 
  getById,
  deleteMe,
};
