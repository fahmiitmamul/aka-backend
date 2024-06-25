const teamRouter = require('express').Router()
const teamController = require('../../controllers/website-setting/team.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

teamRouter.get('/', teamController.getAll)
teamRouter.get('/:id', teamController.findOneById)
teamRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    teamController.create
)
teamRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    teamController.update
)
teamRouter.delete('/:id', authMiddleware, teamController.delete)

module.exports = teamRouter
