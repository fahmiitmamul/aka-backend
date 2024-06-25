const testimonyRouter = require('express').Router()
const testimonyController = require('../../controllers/website-setting/testimony.controller')
const { uploadPicture } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

testimonyRouter.get('/', testimonyController.getAll)
testimonyRouter.get('/:id', testimonyController.findOneById)
testimonyRouter.post(
    '/',
    uploadPicture.fields([
        { name: 'picture', maxCount: 1 },
        { name: 'profilephoto', maxCount: 1 },
    ]),
    testimonyController.create
)
testimonyRouter.patch(
    '/:id',
    uploadPicture.fields([
        { name: 'picture', maxCount: 1 },
        { name: 'profilephoto', maxCount: 1 },
    ]),
    testimonyController.update
)
testimonyRouter.delete('/:id', authMiddleware, testimonyController.delete)

module.exports = testimonyRouter
