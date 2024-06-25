const articleRouter = require('express').Router()
const articleController = require('../../controllers/website-setting/article.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

articleRouter.get('/', articleController.getAll)
articleRouter.get('/category', articleController.findArticleCategory)
articleRouter.get('/:id', articleController.findOneById)
articleRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    articleController.create
)
articleRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    articleController.update
)
articleRouter.delete('/:id', authMiddleware, articleController.delete)

module.exports = articleRouter
