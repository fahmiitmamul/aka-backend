const employeeStatusRouter = require('express').Router()
const employeStatusController = require('../../controllers/master-data/employeestatus.controller')
const authMiddleware = require('../../middleware/auth.middleware')

employeeStatusRouter.get('/', employeStatusController.getAll)
employeeStatusRouter.get('/:id', employeStatusController.findOneById)
employeeStatusRouter.post('/', authMiddleware, employeStatusController.create)
employeeStatusRouter.patch(
    '/:id',
    authMiddleware,
    employeStatusController.update
)
employeeStatusRouter.delete(
    '/:id',
    authMiddleware,
    employeStatusController.delete
)

module.exports = employeeStatusRouter
