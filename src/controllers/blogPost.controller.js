const { blogPostService } = require('../services/as');
const { mapStatusHTTP } = require('../utils');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user.user;
  
  try {
    const { status, data } = await blogPostService.createNewPost({ 
      title, content, categoryIds, email });
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

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await blogPostService.getById(id);
  res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { email } = req.user.user;
  const { id } = req.params;
  const { title, content } = req.body;
  const { status, data } = await blogPostService.update({ title, content }, id, email);
  res.status(mapStatusHTTP(status)).json(data);
};

const deletePost = async (req, res) => {
  const { email } = req.user.user;
  const { id } = req.params;
  const { status, data } = await blogPostService.deletePost(id, email);
  res.status(mapStatusHTTP(status)).json(data);
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const { email } = req.user.user;
  const { status, data } = await blogPostService.searchPost(q, email);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createNewPost,
  getAll,
  getById,
  update,
  deletePost,
  searchPost,
};