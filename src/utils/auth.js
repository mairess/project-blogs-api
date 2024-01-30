const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'xxDairhd666654sdXdfTOKFCC';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const verify = (token) => jwt.verify(token, secret);

module.exports = { 
  createToken, 
  verify,
};