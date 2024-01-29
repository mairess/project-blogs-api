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

module.exports = {
  login,
};
