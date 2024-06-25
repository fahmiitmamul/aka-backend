const sliderRouter = require('express').Router()
const sliderController = require('../../controllers/website-setting/slider.controller')
const { SliderUploadMiddleware } = require('../../middleware/slider.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

sliderRouter.get('/', sliderController.getAll)
sliderRouter.get('/:id', sliderController.findOneById)
sliderRouter.post(
    '/',
    authMiddleware,
    SliderUploadMiddleware('picture'),
    sliderController.create
)
sliderRouter.patch(
    '/:id',
    authMiddleware,
    SliderUploadMiddleware('picture'),
    sliderController.update
)
sliderRouter.delete('/:id', authMiddleware, sliderController.delete)

module.exports = sliderRouter
