const partnerRouter = require('express').Router()
const partnerController = require('../../controllers/website-setting/companypartner.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

partnerRouter.get('/', partnerController.getAll)
partnerRouter.get('/:id', partnerController.findOneById)
partnerRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('company_logo'),
    partnerController.create
)
partnerRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('company_logo'),
    partnerController.update
)
partnerRouter.delete('/:id', authMiddleware, partnerController.delete)

module.exports = partnerRouter
