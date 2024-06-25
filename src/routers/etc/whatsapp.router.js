const whatsappRouter = require('express').Router()
const whatsappController = require('../../controllers/etc/whatsapp.controller')
const authMiddleware = require('../../middleware/auth.middleware')

whatsappRouter.get('/', whatsappController.getAll)
whatsappRouter.post('/', authMiddleware, whatsappController.create)
whatsappRouter.patch('/:id', authMiddleware, whatsappController.update)
whatsappRouter.delete('/:id', authMiddleware, whatsappController.delete)

module.exports = whatsappRouter
