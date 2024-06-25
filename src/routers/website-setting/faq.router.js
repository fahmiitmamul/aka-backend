const faqRouter = require('express').Router()
const faqController = require('../../controllers/website-setting/faq.controller')
const authMiddleware = require('../../middleware/auth.middleware')

faqRouter.get('/', faqController.getAll)
faqRouter.get('/:id', faqController.findOneById)
faqRouter.post('/', authMiddleware, faqController.create)
faqRouter.patch('/:id', authMiddleware, faqController.update)
faqRouter.delete('/:id', authMiddleware, faqController.delete)

module.exports = faqRouter
