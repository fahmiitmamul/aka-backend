const errorhandler = require('../../helpers/errorhandler.helper')
const { application_link } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await application_link.findAndCountAll({
                where: {
                    picture: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all application link successfully',
                results: {
                    data: rows,
                    totalData: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    pageSize: limit,
                },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req.file) {
                req.body.picture = req.file.filename
            }
            const data = await application_link.create(req.body)
            return res.json({
                success: true,
                message: 'Create application link successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await application_link.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get application link successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await application_link.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update application link successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await application_link.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete application link successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
