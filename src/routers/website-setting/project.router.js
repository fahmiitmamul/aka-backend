const projectDataRouter = require('express').Router()
const projectDataController = require('../../controllers/website-setting/project.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

projectDataRouter.get('/', projectDataController.getAll)
projectDataRouter.get('/:id', projectDataController.findOneById)
projectDataRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    projectDataController.create
)
projectDataRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    projectDataController.update
)
projectDataRouter.delete('/:id', authMiddleware, projectDataController.delete)

module.exports = projectDataRouter
