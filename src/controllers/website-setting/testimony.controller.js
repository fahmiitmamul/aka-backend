const errorhandler = require('../../helpers/errorhandler.helper')
const { testimony } = require('../../models/index')
const { position_of_work } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await testimony.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: {
                    model: position_of_work,
                    as: 'position',
                },
            })
            return res.json({
                success: true,
                message: 'Get all testimony successfully',
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
            const data = await testimony.findOne({
                where: {
                    id: req.params.id,
                },
                include: {
                    model: position_of_work,
                    as: 'position',
                },
            })
            return res.json({
                success: true,
                message: 'Get testimony successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req?.files?.picture?.[0]?.filename) {
                req.body.picture = req.files.picture[0]?.filename
            }
            if (req?.files?.profilephoto?.[0]?.filename) {
                req.body.profilephoto = req.files.profilephoto[0].filename
            }
            const data = await testimony.create(req.body)
            return res.json({
                success: true,
                message: 'Create testimony successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req?.files?.picture?.[0]?.filename) {
                req.body.picture = req.files.picture[0]?.filename
            }
            if (req?.files?.profilephoto?.[0]?.filename) {
                req.body.profilephoto = req.files.profilephoto[0].filename
            }
            const data = await testimony.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update testimony successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await testimony.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete testimony successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
