const emailRouter = require('express').Router()
const emailController = require('../../controllers/channel-setting/email.controller')

emailRouter.get('/', emailController.getAll)
emailRouter.post('/', emailController.create)
emailRouter.patch('/:id', emailController.update)
emailRouter.delete('/:id', emailController.delete)

module.exports = emailRouter
