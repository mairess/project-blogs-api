const userService = require('../services/user.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { status, data } = await userService.login({ email, password });
  res.status(mapStatusHTTP(status)).json(data);
};

const creteNewUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  
  const { status, data } = await userService.creteNewUser({ displayName, email, password });
  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await userService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
  creteNewUser,
  getAll,
};