const fieldOfWorkRouter = require('express').Router()
const fieldOfWorkController = require('../../controllers/master-data/fieldofwork.controller')
const authMiddleware = require('../../middleware/auth.middleware')

fieldOfWorkRouter.get('/', fieldOfWorkController.getAll)
fieldOfWorkRouter.get('/:id', fieldOfWorkController.findOneById)
fieldOfWorkRouter.post('/', authMiddleware, fieldOfWorkController.create)
fieldOfWorkRouter.patch('/:id', authMiddleware, fieldOfWorkController.update)
fieldOfWorkRouter.delete('/:id', authMiddleware, fieldOfWorkController.delete)

module.exports = fieldOfWorkRouter
