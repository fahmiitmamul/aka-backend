const errorhandler = require('../../helpers/errorhandler.helper')
const { application_info } = require('../../models/index')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = req.query.limit ? parseInt(req.query.limit) : 5
            const page = req.query.page ? parseInt(req.query.page) : 1
            const offset = page === 1 ? 0 : (page - 1) * limit
            const data = await application_info.findAll({
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all application info successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req?.files?.logo?.[0]?.filename) {
                req.body.logo = req.files.logo[0]?.filename
            }
            if (req?.files?.icon?.[0]?.filename) {
                req.body.icon = req.files.icon[0].filename
            }
            const data = await application_info.create(req.body)
            return res.json({
                success: true,
                message: 'Create application info successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req?.files?.logo?.[0]?.filename) {
                req.body.logo = req.files.logo[0]?.filename
            }
            if (req?.files?.icon?.[0]?.filename) {
                req.body.icon = req.files.icon[0].filename
            }
            const data = await application_info.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update application info successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await application_info.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete application info successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
