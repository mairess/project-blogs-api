const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'xxDairhd666654sdXdfTOKFCC';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const { id, email } = payload;
  return jwt.sign({ id, email }, secret, jwtConfig);
};

const verify = (token) => jwt.verify(token, secret);

module.exports = { 
  createToken, 
  verify,
};