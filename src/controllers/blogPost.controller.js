const { blogPostService } = require('../services');
const { mapStatusHTTP } = require('../utils');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user.user;
  
  try {
    const { status, data } = await blogPostService.createNewPost({ 
      title, 
      content,
      categoryIds,
      email,
    });
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  const { email } = req.user.user;
  const { status, data } = await blogPostService.getAll(email);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createNewPost,
  getAll,
};