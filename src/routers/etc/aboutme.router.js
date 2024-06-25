const aboutMeRouter = require('express').Router()
const aboutMeController = require('../../controllers/etc/aboutme.controller')
const { uploadMiddleware } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

aboutMeRouter.get('/', aboutMeController.getAll)
aboutMeRouter.post(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    aboutMeController.create
)
aboutMeRouter.patch(
    '/',
    authMiddleware,
    uploadMiddleware('picture'),
    aboutMeController.update
)
aboutMeRouter.delete('/', authMiddleware, aboutMeController.delete)

module.exports = aboutMeRouter
