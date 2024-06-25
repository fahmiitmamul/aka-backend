const errorhandler = require('../../helpers/errorhandler.helper')
const { sub_menu } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || 1
            const id = req.query.id || 1
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await sub_menu.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            id: id,
                        },
                        {
                            menu_id: search,
                        },
                    ],
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all sub menu successfully',
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
            const data = await sub_menu.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get sub menu successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await sub_menu.create(req.body)
            return res.json({
                success: true,
                message: 'Create sub menu successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await sub_menu.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update sub menu successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await sub_menu.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete sub menu successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
