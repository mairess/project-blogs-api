const route = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/categories', authMiddleware, categoryController.creteNewCategory);
route.get('/categories', authMiddleware, categoryController.getAll);

module.exports = route;