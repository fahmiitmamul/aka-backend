const statusRouter = require('express').Router()
const statusController = require('../../controllers/etc/status.controller')
const authMiddleware = require('../../middleware/auth.middleware')

statusRouter.get('/', statusController.getAll)
statusRouter.get('/:id', statusController.findOneById)
statusRouter.post('/', authMiddleware, statusController.create)
statusRouter.patch('/:id', authMiddleware, statusController.update)
statusRouter.delete('/:id', authMiddleware, statusController.delete)

module.exports = statusRouter
