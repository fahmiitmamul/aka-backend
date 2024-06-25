const errorhandler = require('../../helpers/errorhandler.helper')
const { visitor } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    saveVisitor: (req, res) => {
        try {
            return res.json({
                success: true,
                message: 'Tracked visitor successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await visitor.findAndCountAll({
                where: {
                    ipAddress: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all visitor successfully',
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
    delete: async (req, res) => {
        try {
            const data = await visitor.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete visitor successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
