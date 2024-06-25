const contactsRouter = require('express').Router()
const contactsController = require('../../controllers/channel-setting/contacts.controller')
const authMiddleware = require('../../middleware/auth.middleware')

contactsRouter.get('/', contactsController.getAll)
contactsRouter.post('/', authMiddleware, contactsController.create)
contactsRouter.patch('/:id', authMiddleware, contactsController.update)
contactsRouter.delete('/:id', authMiddleware, contactsController.delete)

module.exports = contactsRouter
