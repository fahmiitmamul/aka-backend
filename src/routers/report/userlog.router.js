const userLogRouter = require('express').Router()
const userlogController = require('../../controllers/report/userlog.controller')
const authMiddleware = require('../../middleware/auth.middleware')

userLogRouter.get('/', userlogController.getAll)
userLogRouter.get('/:id', userlogController.findOneById)
userLogRouter.post('/', authMiddleware, userlogController.create)
userLogRouter.patch('/:id', authMiddleware, userlogController.update)
userLogRouter.delete('/:id', authMiddleware, userlogController.delete)

module.exports = userLogRouter
