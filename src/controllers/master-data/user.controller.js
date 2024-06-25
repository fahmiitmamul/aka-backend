const errorhandler = require('../../helpers/errorhandler.helper')
const { user } = require('../../models/index')
const { role } = require('../../models/index')
const { Op } = require('sequelize')
const argon = require('argon2')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await user.findAndCountAll({
                where: {
                    email: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: role,
                        as: 'role',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all user successfully',
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
    updatePermissions: async (req, res) => {
        try {
            const data = await user.update(
                {
                    permissions_allowed: req.body,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                    returning: ['*'],
                }
            )
            return res.json({
                success: true,
                message: 'Update permissions successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await user.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: role,
                        as: 'role',
                    },
                ],
                attributes: { exclude: ['password'] },
            })
            return res.json({
                success: true,
                message: 'Get user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await user.create(req.body)
            return res.json({
                success: true,
                message: 'Create user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const hashedPassword = await argon.hash(req.body.password)
            const data = await user.update(
                {
                    first_name: req.body.first_name,
                    password: hashedPassword,
                    role_id: req.body.role_id,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            return res.json({
                success: true,
                message: 'Update user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await user.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
