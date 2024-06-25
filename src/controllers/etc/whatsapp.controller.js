const errorhandler = require('../../helpers/errorhandler.helper')
const { whatsapp } = require('../../models/index')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = req.query.limit ? parseInt(req.query.limit) : 5
            const page = req.query.page ? parseInt(req.query.page) : 1
            const offset = page === 1 ? 0 : (page - 1) * limit
            const data = await whatsapp.findAll({
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all whatsapp successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await whatsapp.create(req.body)
            return res.json({
                success: true,
                message: 'Create whatsapp successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await whatsapp.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update whatsapp successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await whatsapp.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete whatsapp successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
