const router = require('express').Router();
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

router.post('/', authMiddleware, categoryController.creteNewCategory);
router.get('/', authMiddleware, categoryController.getAll);

module.exports = router;