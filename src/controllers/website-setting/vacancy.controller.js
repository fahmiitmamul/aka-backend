const errorhandler = require('../../helpers/errorhandler.helper')
const { vacancy } = require('../../models/index')
const { gender } = require('../../models/index')
const { religion } = require('../../models/index')
const { vaccine } = require('../../models/index')
const { province } = require('../../models/index')
const { regency } = require('../../models/index')
const { district } = require('../../models/index')
const { village } = require('../../models/index')
const { work_experience } = require('../../models/index')
const { marital_status } = require('../../models/index')
const { needed_position } = require('../../models/index')
const { bank_name } = require('../../models/index')
const { status } = require('../../models/index')
const { v2: cloudinary } = require('cloudinary')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            let rows
            let count
            if (req.query.search) {
                const result = await vacancy.findAndCountAll({
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
                            model: gender,
                            as: 'gender',
                        },
                        {
                            model: work_experience,
                            as: 'work_experience',
                        },
                        {
                            model: bank_name,
                            as: 'bank',
                        },
                        {
                            model: marital_status,
                            as: 'marital_status',
                        },
                        {
                            model: religion,
                            as: 'religion',
                        },
                        {
                            model: needed_position,
                            as: 'position',
                        },
                        {
                            model: status,
                            as: 'status',
                        },
                        {
                            model: vaccine,
                            as: 'vaccine',
                        },
                        {
                            model: province,
                            as: 'e_ktp_province',
                        },
                        {
                            model: regency,
                            as: 'e_ktp_regency',
                        },
                        {
                            model: district,
                            as: 'e_ktp_district',
                        },
                        {
                            model: village,
                            as: 'e_ktp_village',
                        },
                        {
                            model: province,
                            as: 'domicile_province',
                        },
                        {
                            model: regency,
                            as: 'domicile_regency',
                        },
                        {
                            model: district,
                            as: 'domicile_district',
                        },
                        {
                            model: village,
                            as: 'domicile_village',
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
                message: 'Get all vacancy successfully',
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
    getAllVacancy: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await vacancy.findAndCountAll({
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: gender,
                        as: 'gender',
                    },
                    {
                        model: work_experience,
                        as: 'work_experience',
                    },
                    {
                        model: bank_name,
                        as: 'bank',
                    },
                    {
                        model: marital_status,
                        as: 'marital_status',
                    },
                    {
                        model: religion,
                        as: 'religion',
                    },
                    {
                        model: needed_position,
                        as: 'position',
                    },
                    {
                        model: status,
                        as: 'status',
                    },
                    {
                        model: vaccine,
                        as: 'vaccine',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: district,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: district,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })

            return res.json({
                success: true,
                message: 'Get all vacancy successfully',
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
            const data = await vacancy.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: gender,
                        as: 'gender',
                    },
                    {
                        model: work_experience,
                        as: 'work_experience',
                    },
                    {
                        model: bank_name,
                        as: 'bank',
                    },
                    {
                        model: marital_status,
                        as: 'marital_status',
                    },
                    {
                        model: religion,
                        as: 'religion',
                    },
                    {
                        model: needed_position,
                        as: 'position',
                    },
                    {
                        model: status,
                        as: 'status',
                    },
                    {
                        model: vaccine,
                        as: 'vaccine',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: district,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: district,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get vacancy successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req?.files?.profile_photo?.[0]?.originalname) {
                req.body.profile_photo =
                    req?.files?.profile_photo?.[0]?.originalname
            }
            if (req?.files?.e_ktp?.[0]?.originalname) {
                req.body.e_ktp = req?.files?.e_ktp?.[0]?.originalname
            }
            if (req?.files?.cv?.[0]?.originalname) {
                req.body.cv = req?.files?.cv?.[0]?.originalname
            }
            if (req?.files?.other_document?.[0]?.originalname) {
                req.body.other_document =
                    req?.files?.other_document?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'auto',
                    public_id: req?.files?.profile_photo?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'uploads',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.profile_photo?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'auto',
                    public_id: req?.files?.e_ktp?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'uploads',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.e_ktp?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.cv?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'cv',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.cv?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.other_document?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'other_document',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.other_document?.[0]?.buffer)

            const educationData = JSON.parse(req.body.education)
            const workExperienceHistoryData = JSON.parse(
                req.body.work_experience_history
            )
            const vehicleTypeData = JSON.parse(req.body.vehicle_type)
            const driverLicenseData = JSON.parse(req.body.driver_license)
            const data = await vacancy.create({
                ...req.body,
                education: educationData,
                work_experience_histories: workExperienceHistoryData,
                driver_license: driverLicenseData,
                vehicle_type: vehicleTypeData,
            })

            return res.json({
                success: true,
                message: 'Create vacancy successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req?.files?.profile_photo?.[0]?.originalname) {
                req.body.profile_photo =
                    req?.files?.profile_photo?.[0]?.originalname
            }
            if (req?.files?.e_ktp?.[0]?.originalname) {
                req.body.e_ktp = req?.files?.e_ktp?.[0]?.originalname
            }
            if (req?.files?.cv?.[0]?.originalname) {
                req.body.cv = req?.files?.cv?.[0]?.originalname
            }
            if (req?.files?.other_document?.[0]?.originalname) {
                req.body.other_document =
                    req?.files?.other_document?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'auto',
                    public_id: req?.files?.profile_photo?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'profile_photo',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.profile_photo?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'auto',
                    public_id: req?.files?.e_ktp?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'e_ktp',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.e_ktp?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.cv?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'cv',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.cv?.[0]?.buffer)

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.other_document?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'other_document',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.other_document?.[0]?.buffer)

            const educationData = JSON.parse(req.body.education)
            const workExperienceHistoryData = JSON.parse(
                req.body.work_experience_history
            )
            const vehicleTypeData = JSON.parse(req.body.vehicle_type)
            const driverLicenseData = JSON.parse(req.body.driver_license)
            const data = await vacancy.update(
                {
                    ...req.body,
                    education: educationData,
                    work_experience_histories: workExperienceHistoryData,
                    driver_license: driverLicenseData,
                    vehicle_type: vehicleTypeData,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )

            return res.json({
                success: true,
                message: 'Update vacancy successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateStatus: async (req, res) => {
        try {
            const data = await vacancy.update(req.body, {
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
            const data = await vacancy.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete vacancy successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
