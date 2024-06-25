const subMenu = require('express').Router()
const subMenuController = require('../../controllers/website-setting/submenu.controller')
const authMiddleware = require('../../middleware/auth.middleware')

subMenu.get('/', subMenuController.getAll)
subMenu.get('/:id', subMenuController.findOneById)
subMenu.post('/', authMiddleware, subMenuController.create)
subMenu.patch('/:id', authMiddleware, subMenuController.update)
subMenu.delete('/:id', authMiddleware, subMenuController.delete)

module.exports = subMenu
