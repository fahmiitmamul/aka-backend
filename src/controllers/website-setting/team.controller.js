const errorhandler = require('../../helpers/errorhandler.helper')
const { team } = require('../../models/index')
const { departement } = require('../../models/index')
const { position_of_work } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await team.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: departement,
                        as: 'departement',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all team successfully',
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
            const data = await team.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: departement,
                        as: 'departement',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get team successfully',
                results: data,
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
            const data = await team.create(req.body)
            return res.json({
                success: true,
                message: 'Create team successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.picture = req.file.filename
            }
            const data = await team.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update team successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await team.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete team successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
