const route = require('express').Router();
const { userController } = require('../controllers');

route.post('/login', userController.login);

module.exports = route;