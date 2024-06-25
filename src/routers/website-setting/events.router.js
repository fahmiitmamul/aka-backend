const eventsRouter = require('express').Router()
const eventsController = require('../../controllers/website-setting/events.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

eventsRouter.get('/', eventsController.getAll)
eventsRouter.get('/:id', eventsController.findOneById)
eventsRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    eventsController.create
)
eventsRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    eventsController.update
)
eventsRouter.delete('/:id', authMiddleware, eventsController.delete)

module.exports = eventsRouter
