const vacancyRouter = require('express').Router()
const vacancyController = require('../../controllers/website-setting/vacancy.controller')
const { uploadDocuments } = require('../../middleware/upload.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

vacancyRouter.get('/', vacancyController.getAll)
vacancyRouter.get('/list-all-vacancy', vacancyController.getAllVacancy)
vacancyRouter.get('/:id', vacancyController.findOneById)
vacancyRouter.patch(
    '/status/:id',
    authMiddleware,
    vacancyController.updateStatus
)
vacancyRouter.post(
    '/',
    uploadDocuments.fields([
        { name: 'e_ktp', maxCount: 1 },
        { name: 'profile_photo', maxCount: 1 },
        { name: 'cv', maxCount: 1 },
        { name: 'other_document', maxCount: 1 },
    ]),
    vacancyController.create
)
vacancyRouter.patch(
    '/:id',
    uploadDocuments.fields([
        { name: 'e_ktp', maxCount: 1 },
        { name: 'profile_photo', maxCount: 1 },
        { name: 'cv', maxCount: 1 },
        { name: 'other_document', maxCount: 1 },
    ]),
    vacancyController.update
)
vacancyRouter.delete('/:id', authMiddleware, vacancyController.delete)

module.exports = vacancyRouter
