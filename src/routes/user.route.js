const router = require('express').Router();
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

router.post('/', userController.creteNewUser);
router.get('/', authMiddleware, userController.getAll);
router.get('/:id', authMiddleware, userController.getById);
router.delete('/:me', authMiddleware, userController.deleteMe);

module.exports = router;