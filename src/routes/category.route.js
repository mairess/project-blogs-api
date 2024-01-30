const route = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/categories', authMiddleware, categoryController.creteNewCategory);

module.exports = route;