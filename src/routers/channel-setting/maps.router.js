const mapsRouter = require('express').Router()
const mapsController = require('../../controllers/channel-setting/maps.controller')

mapsRouter.get('/', mapsController.getAll)
mapsRouter.post('/', mapsController.create)
mapsRouter.patch('/:id', mapsController.update)
mapsRouter.delete('/:id', mapsController.delete)

module.exports = mapsRouter
