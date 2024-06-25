const workExperienceRouter = require('express').Router()
const workExperienceController = require('../../controllers/master-data/workexperience.controller')
const authMiddleware = require('../../middleware/auth.middleware')

workExperienceRouter.get('/', workExperienceController.getAll)
workExperienceRouter.get('/:id', workExperienceController.findOneById)
workExperienceRouter.post('/', authMiddleware, workExperienceController.create)
workExperienceRouter.patch(
    '/:id',
    authMiddleware,
    workExperienceController.update
)
workExperienceRouter.delete(
    '/:id',
    authMiddleware,
    workExperienceController.delete
)

module.exports = workExperienceRouter
