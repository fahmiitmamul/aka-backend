const errorhandler = require('../../helpers/errorhandler.helper')
const { contact_me } = require('../../models/index')
const { business_type } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await contact_me.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: {
                    model: business_type,
                    as: 'business_type',
                },
            })
            return res.json({
                success: true,
                message: 'Get all contact me successfully',
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
    findOneById: async (req, res) => {
        try {
            const data = await contact_me.findOne({
                where: {
                    id: req.params.id,
                },
                include: {
                    model: business_type,
                    as: 'business_type',
                },
            })
            return res.json({
                success: true,
                message: 'Get contact me successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await contact_me.create(req.body)
            return res.json({
                success: true,
                message: 'Create contact me successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await contact_me.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update contact me successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await contact_me.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete contact me successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
