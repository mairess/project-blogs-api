const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

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

module.exports = {
  createNewPost,
};