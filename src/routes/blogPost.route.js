const router = require('express').Router();
const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

router.get('/search', authMiddleware, blogPostController.searchPost);
router.post('/', authMiddleware, blogPostController.createNewPost);
router.get('/', authMiddleware, blogPostController.getAll);
router.get('/:id', authMiddleware, blogPostController.getById);
router.put('/:id', authMiddleware, blogPostController.update);
router.delete('/:id', authMiddleware, blogPostController.deletePost);

module.exports = router;