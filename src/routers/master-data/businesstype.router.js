const businessTypeRouter = require('express').Router()
const businessTypeController = require('../../controllers/master-data/businesstype.controller')
const authMiddleware = require('../../middleware/auth.middleware')

businessTypeRouter.get('/', businessTypeController.getAll)
businessTypeRouter.get('/:id', businessTypeController.findOneById)
businessTypeRouter.post('/', authMiddleware, businessTypeController.create)
businessTypeRouter.patch('/:id', authMiddleware, businessTypeController.update)
businessTypeRouter.delete('/:id', authMiddleware, businessTypeController.delete)

module.exports = businessTypeRouter
