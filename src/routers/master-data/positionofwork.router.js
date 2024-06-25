const positionOfWorkRouter = require('express').Router()
const positionOfWorkController = require('../../controllers/master-data/positionofwork.controller')
const authMiddleware = require('../../middleware/auth.middleware')

positionOfWorkRouter.get('/', positionOfWorkController.getAll)
positionOfWorkRouter.get('/:id', positionOfWorkController.findOneById)
positionOfWorkRouter.post('/', authMiddleware, positionOfWorkController.create)
positionOfWorkRouter.patch(
    '/:id',
    authMiddleware,
    positionOfWorkController.update
)
positionOfWorkRouter.delete(
    '/:id',
    authMiddleware,
    positionOfWorkController.delete
)

module.exports = positionOfWorkRouter
