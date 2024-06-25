const clientPictureRouter = require('express').Router()
const clientPictureController = require('../../controllers/website-setting/clientpicture.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

clientPictureRouter.get('/', clientPictureController.getAll)
clientPictureRouter.get('/:id', clientPictureController.findOneById)
clientPictureRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    clientPictureController.create
)
clientPictureRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    clientPictureController.update
)
clientPictureRouter.delete(
    '/:id',
    authMiddleware,
    clientPictureController.delete
)

module.exports = clientPictureRouter
