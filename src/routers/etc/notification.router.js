const notificationRouter = require('express').Router()
const notificationController = require('../../controllers/etc/notification.controller')
const authMiddleware = require('../../middleware/auth.middleware')

notificationRouter.get('/', notificationController.getAll)
notificationRouter.get('/:id', notificationController.findOneById)
notificationRouter.post('/', authMiddleware, notificationController.create)
notificationRouter.patch('/:id', authMiddleware, notificationController.update)
notificationRouter.delete('/:id', authMiddleware, notificationController.delete)

module.exports = notificationRouter
