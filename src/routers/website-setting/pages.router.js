const pagesRouter = require('express').Router()
const pagesController = require('../../controllers/website-setting/pages.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

pagesRouter.get('/', pagesController.getAll)
pagesRouter.get('/:id', pagesController.findOneById)
pagesRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    pagesController.create
)
pagesRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    pagesController.update
)
pagesRouter.delete('/:id', authMiddleware, pagesController.delete)

module.exports = pagesRouter
