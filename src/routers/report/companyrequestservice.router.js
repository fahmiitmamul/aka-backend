const companyRequestServiceRouter = require('express').Router()
const companyRequestServiceController = require('../../controllers/report/companyrequestservice.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

companyRequestServiceRouter.get('/', companyRequestServiceController.getAll)
companyRequestServiceRouter.get(
    '/list-all',
    companyRequestServiceController.getAllCompanyRequestService
)
companyRequestServiceRouter.get(
    '/:id',
    companyRequestServiceController.findOneById
)
companyRequestServiceRouter.patch(
    '/status/:id',
    authMiddleware,
    companyRequestServiceController.updateStatus
)
companyRequestServiceRouter.post(
    '/',
    uploadMiddleware('company_logo'),
    companyRequestServiceController.create
)
companyRequestServiceRouter.patch(
    '/:id',
    uploadMiddleware('company_logo'),
    companyRequestServiceController.update
)
companyRequestServiceRouter.delete(
    '/:id',
    authMiddleware,
    companyRequestServiceController.delete
)

module.exports = companyRequestServiceRouter
