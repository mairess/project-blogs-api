const { userService } = require('../services');
const { mapStatusHTTP } = require('../utils');

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

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  res.status(mapStatusHTTP(status)).json(data);
};

const deleteMe = async (req, res) => {
  const { email } = req.user.user;
  const { status, data } = await userService.deleteMe(email);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
  creteNewUser,
  getAll,
  getById,
  deleteMe,
};