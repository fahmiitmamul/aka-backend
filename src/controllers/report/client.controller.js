const errorhandler = require('../../helpers/errorhandler.helper')
const { client } = require('../../models/index')
const { business_type } = require('../../models/index')
const { province } = require('../../models/index')
const { regency } = require('../../models/index')
const { district } = require('../../models/index')
const { village } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await client.findAndCountAll({
                where: {
                    company_name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: business_type,
                        as: 'business_type',
                    },
                    {
                        model: province,
                        as: 'province',
                    },
                    {
                        model: regency,
                        as: 'regency',
                    },
                    {
                        model: district,
                        as: 'district',
                    },
                    {
                        model: village,
                        as: 'village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all client successfully',
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
            const data = await client.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: business_type,
                        as: 'business_type',
                    },
                    {
                        model: province,
                        as: 'province',
                    },
                    {
                        model: regency,
                        as: 'regency',
                    },
                    {
                        model: district,
                        as: 'district',
                    },
                    {
                        model: village,
                        as: 'village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get client successfully',
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

            const data = await client.create(req.body)

            return res.json({
                success: true,
                message: 'Create client successfully',
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
            const data = await client.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update client successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await client.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete client successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
