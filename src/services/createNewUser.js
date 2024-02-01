const bcrypt = require('bcrypt');
const { validateCreateNewUser } = require('./validations/validationInputValues');
const { User } = require('../models');
const { auth } = require('../utils');

const creteNewUser = async (userCredentials) => {
  const error = validateCreateNewUser(userCredentials);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  
  const user = await User.findOne({ where: { email: userCredentials.email } });
    
  if (user && userCredentials.email === user.email) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const hashedPassword = bcrypt.hashSync(userCredentials.password, 10);
  const hashedCredentials = userCredentials;
  hashedCredentials.password = hashedPassword;
  
  await User.create(hashedCredentials);
  
  const { displayName, email } = userCredentials;
  const token = auth.createToken({ displayName, email });
  
  return { status: 'CREATED', data: { token } };
};

module.exports = creteNewUser;