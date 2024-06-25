const errorhandler = require('../../helpers/errorhandler.helper')
const { company_request_services } = require('../../models/index')
const { service } = require('../../models/index')
const { business_type } = require('../../models/index')
const { province } = require('../../models/index')
const { regency } = require('../../models/index')
const { status } = require('../../models/index')
const { district } = require('../../models/index')
const { village } = require('../../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || null
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            let rows
            let count
            if (req.query.search) {
                const result = await company_request_services.findAndCountAll({
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
                            model: service,
                            as: 'service',
                        },
                        {
                            model: status,
                            as: 'status',
                        },
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

                rows = result.rows
                count = result.count
            } else {
                return res.json({
                    success: false,
                    message: 'Data tidak ditemukan',
                })
            }
            return res.json({
                success: true,
                message: 'Get all service list successfully',
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
    getAllCompanyRequestService: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } =
                await company_request_services.findAndCountAll({
                    order: [['id', 'ASC']],
                    offset: offset,
                    limit: limit,
                    include: [
                        {
                            model: service,
                            as: 'service',
                        },
                        {
                            model: status,
                            as: 'status',
                        },
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
                message: 'Get all service list successfully',
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
                req.body.company_logo = req.file.filename
            }
            const data = await company_request_services.create(req.body)
            return res.json({
                success: true,
                message: 'Create service list successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await company_request_services.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: service,
                        as: 'service',
                    },
                    {
                        model: status,
                        as: 'status',
                    },
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
                message: 'Get service list successfully',
                results: [data],
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.company_logo = req.file.filename
            }
            const data = await company_request_services.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update service list successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateStatus: async (req, res) => {
        try {
            const data = await company_request_services.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update status successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await company_request_services.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete service list successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
