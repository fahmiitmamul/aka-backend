const salaryRouter = require('express').Router()
const salaryController = require('../../controllers/etc/salary.controller')
const authMiddleware = require('../../middleware/auth.middleware')

salaryRouter.get('/', salaryController.getAll)
salaryRouter.get('/:id', salaryController.findOneById)
salaryRouter.post('/', authMiddleware, salaryController.create)
salaryRouter.patch('/:id', authMiddleware, salaryController.update)
salaryRouter.delete('/:id', authMiddleware, salaryController.delete)

module.exports = salaryRouter
