const provinceRouter = require('express').Router()
const provinceController = require('../../controllers/region/province.controller')
const authMiddleware = require('../../middleware/auth.middleware')

provinceRouter.get('/', provinceController.getAll)
provinceRouter.get('/:id', provinceController.findOneById)
provinceRouter.post('/', authMiddleware, provinceController.create)
provinceRouter.patch('/:id', authMiddleware, provinceController.update)
provinceRouter.delete('/:id', authMiddleware, provinceController.delete)

module.exports = provinceRouter
