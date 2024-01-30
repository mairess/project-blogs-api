const route = require('express').Router();
const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/post', authMiddleware, blogPostController.createNewPost);

module.exports = route;