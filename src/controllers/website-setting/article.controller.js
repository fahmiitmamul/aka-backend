const errorhandler = require('../../helpers/errorhandler.helper')
const { article } = require('../../models/index')
const { category } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { rows, count } = await article.findAndCountAll({
                where: {
                    slug: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: {
                    model: category,
                    as: 'category',
                },
            })
            return res.json({
                success: true,
                message: 'Get all article successfully',
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
    findArticleCategory: async (req, res) => {
        try {
            const categories = req.query.category
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { rows, count } = await article.findAndCountAll({
                where: {
                    category_id: {
                        [Op.eq]: categories,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: {
                    model: category,
                    as: 'category',
                },
            })
            return res.json({
                success: true,
                message: 'Get all article successfully',
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
            const data = await article.create(req.body)
            return res.json({
                success: true,
                message: 'Create article successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await article.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get article successfully',
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
            const data = await article.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update article successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await article.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete article successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
