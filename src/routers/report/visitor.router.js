const visitorRouter = require('express').Router()
const visitorController = require('../../controllers/report/visitor.controller')
const trackVisitor = require('../../middleware/visitor.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

visitorRouter.post('/', trackVisitor, visitorController.saveVisitor)
visitorRouter.get('/count', visitorController.getAll)
visitorRouter.delete('/:id', authMiddleware, visitorController.delete)

module.exports = visitorRouter
