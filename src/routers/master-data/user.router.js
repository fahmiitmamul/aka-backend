const userRouter = require('express').Router()
const userController = require('../../controllers/master-data/user.controller')
const authMiddleware = require('../../middleware/auth.middleware')

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.findOneById)
userRouter.post('/', authMiddleware, userController.create)
userRouter.patch('/:id', authMiddleware, userController.update)
userRouter.patch(
    '/permissions/:id',
    authMiddleware,
    userController.updatePermissions
)
userRouter.delete('/:id', authMiddleware, userController.delete)

module.exports = userRouter
