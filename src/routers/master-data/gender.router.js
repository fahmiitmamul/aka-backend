const genderRouter = require('express').Router()
const genderController = require('../../controllers/master-data/gender.controller')
const authMiddleware = require('../../middleware/auth.middleware')

genderRouter.get('/', genderController.getAll)
genderRouter.get('/:id', genderController.findOneById)
genderRouter.post('/', authMiddleware, genderController.create)
genderRouter.patch('/:id', authMiddleware, genderController.update)
genderRouter.delete('/:id', authMiddleware, genderController.delete)

module.exports = genderRouter
