const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user.user;
  
  const { status, data } = await blogPostService.createNewPost({ 
    title, 
    content,
    categoryIds,
    email,
  });
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createNewPost,
};