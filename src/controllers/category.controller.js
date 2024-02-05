const { categoryService } = require('../services/as');
const { mapStatusHTTP } = require('../utils');

const creteNewCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.creteNewCategory({ name });
  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  creteNewCategory,
  getAll,
};