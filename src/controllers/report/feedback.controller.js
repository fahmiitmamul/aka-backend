const errorhandler = require('../../helpers/errorhandler.helper')
const { feedback } = require('../../models/index')
const { gender } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await feedback.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: {
                    model: gender,
                    as: 'gender',
                },
            })
            return res.json({
                success: true,
                message: 'Get all feedback successfully',
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
            const data = await feedback.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get feedback successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await feedback.create(req.body)
            return res.json({
                success: true,
                message: 'Create feedback successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await feedback.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update feedback successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await feedback.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete feedback successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
