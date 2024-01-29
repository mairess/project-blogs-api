const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'xxDairhd666654sdXdfTOKFCC';

const createToken = (user) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { username: user.email },
    secret,
    jwtConfig,
  );

  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { 
  createToken, 
  verify,
};