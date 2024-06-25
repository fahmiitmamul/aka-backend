const driverLicenseRouter = require('express').Router()
const driverLicenseListController = require('../../controllers/master-data/driverlicenselist.controller')
const authMiddleware = require('../../middleware/auth.middleware')

driverLicenseRouter.get('/', driverLicenseListController.getAll)
driverLicenseRouter.get('/:id', driverLicenseListController.findOneById)
driverLicenseRouter.post(
    '/',
    authMiddleware,
    driverLicenseListController.create
)
driverLicenseRouter.patch(
    '/:id',
    authMiddleware,
    driverLicenseListController.update
)
driverLicenseRouter.delete(
    '/:id',
    authMiddleware,
    driverLicenseListController.delete
)

module.exports = driverLicenseRouter
