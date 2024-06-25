const colorRouter = require('express').Router()
const colorController = require('../../controllers/channel-setting/color.controller')
const authMiddleware = require('../../middleware/auth.middleware')

colorRouter.get('/', colorController.getAll)
colorRouter.post('/', authMiddleware, colorController.create)
colorRouter.patch('/:id', authMiddleware, colorController.update)
colorRouter.delete('/:id', authMiddleware, colorController.delete)

module.exports = colorRouter
