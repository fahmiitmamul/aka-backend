const partnerPictureRouter = require('express').Router()
const partnerPictureController = require('../../controllers/website-setting/partnerpicture.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

partnerPictureRouter.get('/', partnerPictureController.getAll)
partnerPictureRouter.get('/:id', partnerPictureController.findOneById)
partnerPictureRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    partnerPictureController.create
)
partnerPictureRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    partnerPictureController.update
)
partnerPictureRouter.delete(
    '/:id',
    authMiddleware,
    partnerPictureController.delete
)

module.exports = partnerPictureRouter
