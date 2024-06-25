const sendMailRouter = require('express').Router()
const sendMailController = require('../../controllers/channel-setting/sendmail.controller')

sendMailRouter.post('/', sendMailController.sendMail)

module.exports = sendMailRouter
