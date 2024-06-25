const menuRouter = require('express').Router()
const menuController = require('../../controllers/website-setting/menu.controller')
const authMiddleware = require('../../middleware/auth.middleware')

menuRouter.get('/', menuController.getAll)
menuRouter.get('/:id', menuController.findOneById)
menuRouter.post('/', authMiddleware, menuController.create)
menuRouter.patch('/:id', authMiddleware, menuController.update)
menuRouter.delete('/:id', authMiddleware, menuController.delete)

module.exports = menuRouter
