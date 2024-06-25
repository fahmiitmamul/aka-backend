const vissionMissionRouter = require('express').Router()
const vissionMissionController = require('../../controllers/website-setting/vissionmission.controller')
const authMiddleware = require('../../middleware/auth.middleware')

vissionMissionRouter.get('/', vissionMissionController.getAll)
vissionMissionRouter.get('/:id', vissionMissionController.findOneById)
vissionMissionRouter.post('/', authMiddleware, vissionMissionController.create)
vissionMissionRouter.patch(
    '/:id',
    authMiddleware,
    vissionMissionController.update
)
vissionMissionRouter.delete(
    '/:id',
    authMiddleware,
    vissionMissionController.delete
)

module.exports = vissionMissionRouter
