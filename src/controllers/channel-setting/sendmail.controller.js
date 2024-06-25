const nodemailer = require('nodemailer')
const { email } = require('../../models/index')
const errorhandler = require('../../helpers/errorhandler.helper')

module.exports = {
    sendMail: async (req, res) => {
        try {
            const data = await email.findAll()
            const mailOptions = {
                from: req.body.from,
                to: req.body.to,
                subject: req.body.subject,
                html: `
                <div style="font-family: sans-serif;">
                    <div style="display: flex; justify-content:center; align-items:center; border-bottom: 1px solid black; border-top: 1px solid black;">
                    <img src="https://res.cloudinary.com/dxnewldiy/image/upload/v1699523714/rxl3xf3fho5txqzsp8t4.png"
                    style="width: 100px;"
                    />
                </div>
                <div  style="display: flex; flex-direction:column; justify-content:center; align-items: center;">
                    <p style="font-size: 25px; font-weight: bold">ID Number Anda adalah :</p>
                    <p style="font-size: 25px; font-weight: bold">${req.body.text}</p>
                </div>
                </div>
                <div style="display: flex; justify-content:center; align-items:center; border-bottom: 1px solid black; border-top: 1px solid black;">
                    <img src="https://res.cloudinary.com/dxnewldiy/image/upload/v1699523714/rxl3xf3fho5txqzsp8t4.png"
                    style="width: 100px;"
                    />
                </div>
                </div>
                `,
            }

            const host = data[0].smtp_host
            const port = data[0].smtp_port
            const user = data[0].email
            const pass = data[0].smtp_pass

            const transporter = nodemailer.createTransport({
                host: host,
                port: parseInt(port),
                secure: true,
                auth: {
                    user: user,
                    pass: pass,
                },
            })

            await transporter.sendMail(mailOptions)
            return res.json({
                success: true,
                message: 'Email sent successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
