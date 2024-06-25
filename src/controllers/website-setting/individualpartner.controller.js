const errorhandler = require('../../helpers/errorhandler.helper')
const { individual_partner } = require('../../models/index')
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
            if (req.query.search) {
                const result = await individual_partner.findAndCountAll({
                    where: {
                        id: {
                            [Op.eq]: search,
                        },
                    },
                    order: [['id', 'ASC']],
                    offset: offset,
                    limit: limit,
                    include: [
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

                rows = result.rows
                count = result.count
            } else {
                const result = await individual_partner.findAndCountAll({
                    order: [['id', 'ASC']],
                    offset: offset,
                    limit: limit,
                    include: [
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

                rows = result.rows
                count = result.count
            }
            return res.json({
                success: true,
                message: 'Get all individual partner successfully',
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
            const data = await individual_partner.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
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
                message: 'Get individual partner successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req.file) {
                req.body.profile_picture = req.file.filename
            }
            const data = await individual_partner.create(req.body)
            return res.json({
                success: true,
                message: 'Create individual partner successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.profile_picture = req.file.filename
            }
            const data = await individual_partner.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update individual partner successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await individual_partner.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete individual partner successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
