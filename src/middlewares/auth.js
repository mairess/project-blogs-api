const { verify } = require('../utils/auth');

const tokenCheck = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const [, token] = authorization.split(' ');
  
  try {
    const user = verify(token);
    req.user = { user };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenCheck;