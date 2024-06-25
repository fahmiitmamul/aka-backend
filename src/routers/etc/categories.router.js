const categoriesRouter = require('express').Router()
const categoriesController = require('../../controllers/etc/categories.controller')
const authMiddleware = require('../../middleware/auth.middleware')

categoriesRouter.get('/', categoriesController.getAll)
categoriesRouter.get('/:id', categoriesController.findOneById)
categoriesRouter.post('/', authMiddleware, categoriesController.create)
categoriesRouter.patch('/:id', authMiddleware, categoriesController.update)
categoriesRouter.delete('/:id', authMiddleware, categoriesController.delete)

module.exports = categoriesRouter
