const individualPartnerRouter = require('express').Router()
const individualPartnerController = require('../../controllers/website-setting/individualpartner.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

individualPartnerRouter.get('/', individualPartnerController.getAll)
individualPartnerRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('profile_picture'),
    individualPartnerController.create
)
individualPartnerRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('profile_picture'),
    individualPartnerController.update
)
individualPartnerRouter.delete(
    '/:id',
    authMiddleware,
    individualPartnerController.delete
)

module.exports = individualPartnerRouter
