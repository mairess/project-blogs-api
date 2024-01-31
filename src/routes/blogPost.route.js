const route = require('express').Router();
const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/post', authMiddleware, blogPostController.createNewPost);
route.get('/post', authMiddleware, blogPostController.getAll);
route.get('/post/:id', authMiddleware, blogPostController.getById);
route.put('/post/:id', authMiddleware, blogPostController.update);

module.exports = route;