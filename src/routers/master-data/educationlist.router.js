const educationRouter = require('express').Router()
const educationController = require('../../controllers/master-data/educationlist.controller')
const authMiddleware = require('../../middleware/auth.middleware')

educationRouter.get('/', educationController.getAll)
educationRouter.get('/:id', educationController.findOneById)
educationRouter.post('/', authMiddleware, educationController.create)
educationRouter.patch('/:id', authMiddleware, educationController.update)
educationRouter.delete('/:id', authMiddleware, educationController.delete)

module.exports = educationRouter
