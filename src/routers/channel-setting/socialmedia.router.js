const socialMedia = require('express').Router()
const socialMediaController = require('../../controllers/channel-setting/socialmedia.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

socialMedia.get('/', socialMediaController.getAll)
socialMedia.get('/:id', socialMediaController.findOneById)
socialMedia.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    socialMediaController.create
)
socialMedia.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    socialMediaController.update
)
socialMedia.delete('/:id', authMiddleware, socialMediaController.delete)

module.exports = socialMedia
