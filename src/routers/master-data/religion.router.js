const religionRouter = require('express').Router()
const religionController = require('../../controllers/master-data/religion.controller')
const authMiddleware = require('../../middleware/auth.middleware')

religionRouter.get('/', religionController.getAll)
religionRouter.get('/:id', religionController.findOneById)
religionRouter.post('/', authMiddleware, religionController.create)
religionRouter.patch('/:id', authMiddleware, religionController.update)
religionRouter.delete('/:id', authMiddleware, religionController.delete)

module.exports = religionRouter
