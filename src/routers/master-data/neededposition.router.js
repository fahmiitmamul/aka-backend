const neededPositonRouter = require('express').Router()
const neededPositionController = require('../../controllers/master-data/neededposition.controller')
const authMiddleware = require('../../middleware/auth.middleware')

neededPositonRouter.get('/', neededPositionController.getAll)
neededPositonRouter.get('/:id', neededPositionController.findOneById)
neededPositonRouter.post('/', authMiddleware, neededPositionController.create)
neededPositonRouter.patch(
    '/:id',
    authMiddleware,
    neededPositionController.update
)
neededPositonRouter.delete(
    '/:id',
    authMiddleware,
    neededPositionController.delete
)

module.exports = neededPositonRouter
