const clientRouter = require('express').Router()
const clientController = require('../../controllers/report/client.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

clientRouter.get('/', clientController.getAll)
clientRouter.get('/:id', clientController.findOneById)
clientRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    clientController.create
)
clientRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    clientController.update
)
clientRouter.delete('/:id', authMiddleware, clientController.delete)

module.exports = clientRouter
