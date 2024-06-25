const maritalStatusRouter = require('express').Router()
const maritalStatusController = require('../../controllers/master-data/maritalstatus.controller')
const authMiddleware = require('../../middleware/auth.middleware')

maritalStatusRouter.get('/', maritalStatusController.getAll)
maritalStatusRouter.get('/:id', maritalStatusController.findOneById)
maritalStatusRouter.post('/', authMiddleware, maritalStatusController.create)
maritalStatusRouter.patch(
    '/:id',
    authMiddleware,
    maritalStatusController.update
)
maritalStatusRouter.delete(
    '/:id',
    authMiddleware,
    maritalStatusController.delete
)

module.exports = maritalStatusRouter
