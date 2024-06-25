const applinkRouter = require('express').Router()
const applinkController = require('../../controllers/etc/applink.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

applinkRouter.get('/', applinkController.getAll)
applinkRouter.get('/:id', applinkController.findOneById)
applinkRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    applinkController.create
)
applinkRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    applinkController.update
)
applinkRouter.delete('/:id', applinkController.delete)

module.exports = applinkRouter
