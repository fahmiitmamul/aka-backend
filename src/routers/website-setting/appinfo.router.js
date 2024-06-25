const appInfoRouter = require('express').Router()
const appInfoController = require('../../controllers/website-setting/appinfo.controller')
const { uploadPicture } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

appInfoRouter.get('/', appInfoController.getAll)
appInfoRouter.post(
    '/',
    authMiddleware,
    uploadPicture.fields([
        { name: 'logo', maxCount: 1 },
        { name: 'icon', maxCount: 1 },
    ]),
    appInfoController.create
)
appInfoRouter.patch(
    '/:id',
    authMiddleware,
    uploadPicture.fields([
        { name: 'logo', maxCount: 1 },
        { name: 'icon', maxCount: 1 },
    ]),
    appInfoController.update
)
appInfoRouter.delete('/:id', appInfoController.delete)

module.exports = appInfoRouter
