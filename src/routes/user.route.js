const route = require('express').Router();
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

route.post('/user', userController.creteNewUser);
route.get('/user', authMiddleware, userController.getAll);
route.get('/user/:id', authMiddleware, userController.getById);
route.delete('/user/:me', authMiddleware, userController.deleteMe);

module.exports = route;