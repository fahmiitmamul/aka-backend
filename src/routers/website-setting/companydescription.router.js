const companyDescriptionRouter = require('express').Router()
const companyDescriptionController = require('../../controllers/website-setting/companydescription.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

companyDescriptionRouter.get('/', companyDescriptionController.getAll)
companyDescriptionRouter.get('/:id', companyDescriptionController.findOneById)
companyDescriptionRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    companyDescriptionController.create
)
companyDescriptionRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    companyDescriptionController.update
)
companyDescriptionRouter.delete(
    '/:id',
    authMiddleware,
    companyDescriptionController.delete
)

module.exports = companyDescriptionRouter
