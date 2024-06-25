const contactMeRouter = require('express').Router()
const contactMeController = require('../../controllers/website-setting/contactme.controller')
const authMiddleware = require('../../middleware/auth.middleware')

contactMeRouter.get('/', contactMeController.getAll)
contactMeRouter.get('/:id', contactMeController.findOneById)
contactMeRouter.post('/', authMiddleware, contactMeController.create)
contactMeRouter.patch('/:id', authMiddleware, contactMeController.update)
contactMeRouter.delete('/:id', authMiddleware, contactMeController.delete)

module.exports = contactMeRouter
