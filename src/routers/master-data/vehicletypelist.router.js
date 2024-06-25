const vehicleTypeListRouter = require('express').Router()
const vehicleTypeListController = require('../../controllers/master-data/vehicletypelist.controller')
const authMiddleware = require('../../middleware/auth.middleware')

vehicleTypeListRouter.get('/', vehicleTypeListController.getAll)
vehicleTypeListRouter.get('/:id', vehicleTypeListController.findOneById)
vehicleTypeListRouter.post(
    '/',
    authMiddleware,
    vehicleTypeListController.create
)
vehicleTypeListRouter.patch(
    '/:id',
    authMiddleware,
    vehicleTypeListController.update
)
vehicleTypeListRouter.delete(
    '/:id',
    authMiddleware,
    vehicleTypeListController.delete
)

module.exports = vehicleTypeListRouter
