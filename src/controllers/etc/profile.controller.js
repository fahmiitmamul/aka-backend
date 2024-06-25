const errorhandler = require('../../helpers/errorhandler.helper')
const { profile } = require('../../models/index')
const { user } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await profile.findAndCountAll({
                where: {
                    full_name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all profile successfully',
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
            const { id } = req.user
            const data = await profile.findOne({
                where: {
                    user_id: id,
                },
                include: [
                    {
                        model: user,
                        as: 'user',
                        attributes: { exclude: ['password'] },
                    },
                ],
            })
            if (!id) {
                throw Error('unauthorized')
            }
            return res.json({
                success: true,
                message: 'Get profile successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await profile.create(req.body)
            return res.json({
                success: true,
                message: 'Create profile successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await profile.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update profile successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await profile.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete profile successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
