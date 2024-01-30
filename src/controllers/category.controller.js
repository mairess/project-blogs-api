const categoryService = require('../services/category.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const creteNewCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.creteNewCategory({ name });
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  creteNewCategory,
};