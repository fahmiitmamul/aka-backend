const businessRouter = require('express').Router()
const businessController = require('../../controllers/marketing/business.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

businessRouter.get('/', businessController.getAll)
businessRouter.get('/:id', businessController.findOneById)
businessRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    businessController.create
)
businessRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    businessController.update
)
businessRouter.delete('/:id', authMiddleware, businessController.delete)

module.exports = businessRouter
