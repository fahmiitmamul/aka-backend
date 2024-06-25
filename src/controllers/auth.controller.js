const { user } = require('../models/index')
const { forgot_request } = require('../models/index')
const { profile } = require('../models/index')
const argon = require('argon2')
const jwt = require('jsonwebtoken')
const errorhandler = require('../helpers/errorhandler.helper')

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const users = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (!users) {
                throw Error('auth_no_email')
            }
            const verify = await argon.verify(users.password, password)
            if (!verify) {
                throw Error('auth_wrong_password')
            }
            const token = jwt.sign({ id: users.id }, process.env.APP_SECRET)
            return res.json({
                success: true,
                message: 'Login successfully',
                results: { token },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },

    register: async (req, res) => {
        try {
            const { email, password } = req.body
            const checkEmail = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (checkEmail) {
                throw Error('auth_duplicate_email')
            }
            const hashedPassword = await argon.hash(password)
            const data = {
                ...req.body,
                password: hashedPassword,
                permissions_allowed: {
                    user_roles_create: false,
                    user_roles_read: false,
                    user_roles_update: false,
                    user_roles_delete: false,
                    business_type_create: false,
                    business_type_read: false,
                    business_type_update: false,
                    business_type_delete: false,
                    departement_create: false,
                    departement_read: false,
                    departement_update: false,
                    departement_delete: false,
                    position_create: false,
                    position_read: false,
                    position_update: false,
                    position_delete: false,
                    field_of_work_create: false,
                    field_of_work_read: false,
                    field_of_work_update: false,
                    field_of_work_delete: false,
                    needed_position_create: false,
                    needed_position_read: false,
                    needed_position_update: false,
                    needed_position_delete: false,
                    salary_count_create: false,
                    salary_count_read: false,
                    salary_count_update: false,
                    salary_count_delete: false,
                    employee_status_create: false,
                    employee_status_read: false,
                    employee_status_update: false,
                    employee_status_delete: false,
                    gender_create: false,
                    gender_read: false,
                    gender_update: false,
                    gender_delete: false,
                    religion_create: false,
                    religion_read: false,
                    religion_update: false,
                    religion_delete: false,
                    vaccine_create: false,
                    vaccine_read: false,
                    vaccine_update: false,
                    vaccine_delete: false,
                    education_create: false,
                    education_read: false,
                    education_update: false,
                    education_delete: false,
                    work_experience_create: false,
                    work_experience_read: false,
                    work_experience_update: false,
                    work_experience_delete: false,
                    marital_status_create: false,
                    marital_status_read: false,
                    marital_status_update: false,
                    marital_status_delete: false,
                    driver_license_create: false,
                    driver_license_read: false,
                    driver_license_update: false,
                    driver_license_delete: false,
                    vehicle_type_create: false,
                    vehicle_type_read: false,
                    vehicle_type_update: false,
                    vehicle_type_delete: false,
                },
            }

            const users = await user.create(data)
            await profile.create({
                full_name: users.first_name + users.last_name,
                user_id: users.id,
            })
            const token = jwt.sign({ id: users.id }, process.env.APP_SECRET)
            return res.json({
                success: true,
                message: 'Register successfully',
                results: { token },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body
            const users = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (!users) {
                throw Error('no_user')
            }
            const randomNumber = Math.random()
            const rounded = Math.round(randomNumber * 100000)
            const padded = String(rounded).padEnd(6, '0')

            const forgot = await forgot_request.create({
                email: users.email,
                code: padded,
            })
            if (!forgot) {
                throw Error('forgot_failed')
            }
            return res.json({
                success: true,
                message: 'Request reset password successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { code, email, password } = req.body
            const find = await forgot_request.findOne({
                where: {
                    email: email,
                    code: code,
                },
            })

            if (!find) {
                throw Error('no_forgot_request')
            }
            const selectedUser = await user.findOne({
                where: {
                    email: email,
                },
            })

            const data = {
                password: await argon.hash(password),
            }
            const users = await user.update(
                { password: data.password },
                {
                    where: {
                        id: selectedUser.id,
                    },
                }
            )
            if (!users) {
                throw Error('no_forgot_requests')
            }
            await forgot_request.destroy({
                where: {
                    id: find.id,
                },
            })
            return res.json({
                success: true,
                message: 'Reset password successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
