const galleryRouter = require('express').Router()
const galleryController = require('../../controllers/website-setting/gallery.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

galleryRouter.get('/', galleryController.getAll)
galleryRouter.get('/:id', galleryController.findOneById)
galleryRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    galleryController.create
)
galleryRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    galleryController.update
)
galleryRouter.delete('/:id', authMiddleware, galleryController.delete)

module.exports = galleryRouter
