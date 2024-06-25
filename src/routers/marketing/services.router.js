const servicesRouter = require('express').Router()
const servicesController = require('../../controllers/marketing/services.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

servicesRouter.get('/', servicesController.getAll)
servicesRouter.get('/:id', servicesController.findOneById)
servicesRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    servicesController.create
)
servicesRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    servicesController.update
)
servicesRouter.delete('/:id', authMiddleware, servicesController.delete)

module.exports = servicesRouter
