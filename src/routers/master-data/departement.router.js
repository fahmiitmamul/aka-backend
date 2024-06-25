const departementRouter = require('express').Router()
const departementController = require('../../controllers/master-data/departement.controller')
const authMiddleware = require('../../middleware/auth.middleware')

departementRouter.get('/', departementController.getAll)
departementRouter.get('/:id', departementController.findOneById)
departementRouter.post('/', authMiddleware, departementController.create)
departementRouter.patch('/:id', authMiddleware, departementController.update)
departementRouter.delete('/:id', authMiddleware, departementController.delete)

module.exports = departementRouter
