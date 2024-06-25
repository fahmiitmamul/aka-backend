const { visitor } = require('../models/index')
const requestIp = require('request-ip')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require('dayjs')
const { default: IPinfoWrapper } = require('node-ipinfo')

const trackVisitor = async (req, res, next) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    const tz = 'Asia/Jakarta'
    const dayjsLocal = dayjs()
    const dayJsIndonesia = dayjsLocal.tz(tz)
    const ip = requestIp.getClientIp(req)
    const ipinfo = new IPinfoWrapper(process.env.IPINFO_TOKEN)

    try {
        const { headers } = req
        const visitDate = dayjs().format('DD-MM-YYYY')
        const time = dayJsIndonesia.tz(tz).format('HH:mm:ss')
        const userAgent = headers['user-agent']
        const userData = await ipinfo.lookupIp(ip)

        await visitor.create({
            ipAddress: userData.ip,
            city: userData.city,
            region: userData.region,
            country: userData.country,
            loc: userData.loc,
            visitDate: visitDate,
            time: time,
            userAgent: userAgent,
        })

        next()
    } catch (err) {
        next()
    }
}

module.exports = trackVisitor
