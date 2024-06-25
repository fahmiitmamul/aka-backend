const vaccineRouter = require('express').Router()
const vaccineController = require('../../controllers/master-data/vaccine.controller')
const authMiddleware = require('../../middleware/auth.middleware')

vaccineRouter.get('/', vaccineController.getAll)
vaccineRouter.get('/:id', vaccineController.findOneById)
vaccineRouter.post('/', authMiddleware, vaccineController.create)
vaccineRouter.patch('/:id', authMiddleware, vaccineController.update)
vaccineRouter.delete('/:id', authMiddleware, vaccineController.delete)

module.exports = vaccineRouter
