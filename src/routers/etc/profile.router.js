const profileRouter = require('express').Router()
const profileController = require('../../controllers/etc/profile.controller')
const authMiddleware = require('../../middleware/auth.middleware')

profileRouter.get('/', profileController.findOneById)
profileRouter.post('/', authMiddleware, profileController.create)
profileRouter.patch('/:id', authMiddleware, profileController.update)
profileRouter.delete('/:id', authMiddleware, profileController.delete)

module.exports = profileRouter
