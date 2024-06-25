const feedbackRouter = require('express').Router()
const feedbackController = require('../../controllers/report/feedback.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

feedbackRouter.get('/', feedbackController.getAll)
feedbackRouter.get('/:id', feedbackController.findOneById)
feedbackRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    feedbackController.create
)
feedbackRouter.patch(
    '/:id',
    authMiddleware,
    uploadMiddleware('picture'),
    feedbackController.update
)
feedbackRouter.delete('/:id', authMiddleware, feedbackController.delete)

module.exports = feedbackRouter
