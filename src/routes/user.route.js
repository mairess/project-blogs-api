const route = require('express').Router();
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/user', userController.creteNewUser);
route.get('/user', authMiddleware, userController.getAll);

module.exports = route;