const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const { exec } = require('child_process')

router.use('/aboutme', require('../routers/etc/aboutme.router'))
router.use('/applink', require('../routers/etc/applink.router'))
router.use('/appinfo', require('../routers/website-setting/appinfo.router'))
router.use('/article', require('../routers/website-setting/article.router'))
router.use('/auth', require('../routers/auth.router'))
router.use(
    '/business-type',
    require('../routers/master-data/businesstype.router')
)
router.use('/business', require('../routers/marketing/business.router'))
router.use('/bank', require('../routers/etc/bank.router'))
router.use('/categories', require('../routers/etc/categories.router'))
router.use('/client', require('../routers/report/client.router'))
router.use(
    '/client-picture',
    require('../routers/website-setting/clientpicture.router')
)
router.use('/color', require('../routers/channel-setting/color.router'))
router.use(
    '/company-description',
    require('../routers/website-setting/companydescription.router')
)
router.use(
    '/contact-me',
    require('../routers/website-setting/contactme.router')
)
router.use('/contacts', require('../routers/channel-setting/contacts.router'))
router.use(
    '/company-request-service',
    require('../routers/report/companyrequestservice.router')
)
router.use('/departement', require('../routers/master-data/departement.router'))
router.use(
    '/driver-license-list',
    require('../routers/master-data/driverlicenselist.router')
)
router.use('/education', require('../routers/master-data/educationlist.router'))
router.use(
    '/email',
    authMiddleware,
    require('../routers/channel-setting/email.router')
)
router.use(
    '/employee-status',
    require('../routers/master-data/employeestatus.router')
)
router.use('/events', require('../routers/website-setting/events.router'))
router.use('/faq', require('../routers/website-setting/faq.router'))
router.use('/feedback', require('../routers/report/feedback.router'))
router.use('/fieldofwork', require('../routers/master-data/fieldofwork.router'))
router.use('/gallery', require('../routers/website-setting/gallery.router'))
router.use('/gender', require('../routers/master-data/gender.router'))
router.use(
    '/individual-partner',
    require('../routers/website-setting/individualpartner.router')
)
router.use(
    '/maps',
    authMiddleware,
    require('../routers/channel-setting/maps.router')
)
router.use(
    '/maritalstatus',
    require('../routers/master-data/maritalstatus.router')
)
router.use('/menu', require('../routers/website-setting/menu.router'))
router.use(
    '/needed-position',
    require('../routers/master-data/neededposition.router')
)
router.use('/notification', require('../routers/etc/notification.router'))
router.use('/pages', require('../routers/website-setting/pages.router'))
router.use(
    '/company-partner',
    require('../routers/website-setting/companypartner.router')
)
router.use(
    '/position-of-work',
    require('../routers/master-data/positionofwork.router')
)
router.use('/religion', require('../routers/master-data/religion.router'))
router.use('/project', require('../routers/website-setting/project.router'))
router.use('/profile', authMiddleware, require('../routers/etc/profile.router'))
router.use(
    '/partner-picture',
    require('../routers/website-setting/partnerpicture.router')
)
router.use('/role', require('../routers/etc/role.router'))
router.use('/salary', require('../routers/etc/salary.router'))
router.use('/sendmail', require('../routers/channel-setting/sendmail.router'))
router.use('/service', require('../routers/marketing/services.router'))
router.use('/status', require('../routers/etc/status.router'))
router.use('/slider', require('../routers/website-setting/slider.router'))
router.use(
    '/socialmedia',
    require('../routers/channel-setting/socialmedia.router')
)
router.use('/sub-menu', require('../routers/website-setting/submenu.router'))
router.use('/team', require('../routers/website-setting/team.router'))
router.use('/testimony', require('../routers/website-setting/testimony.router'))
router.use('/user-log', require('../routers/report/userlog.router'))
router.use('/vacancy', require('../routers/website-setting/vacancy.router'))
router.use('/vaccine', require('../routers/master-data/vaccine.router'))
router.use(
    '/vehicle-type-list',
    require('../routers/master-data/vehicletypelist.router')
)
router.use('/visitor', require('../routers/report/visitor.router'))
router.use(
    '/vission-mission',
    require('../routers/website-setting/vissionmission.router')
)
router.use('/whatsapp', require('../routers/etc/whatsapp.router'))
router.use(
    '/workexperience',
    require('../routers/master-data/workexperience.router')
)
router.use('/province', require('../routers/region/province.router'))
router.use('/regency', require('../routers/region/regency.router'))
router.use('/district', require('../routers/region/district.router'))
router.use('/village', require('../routers/region/village.router'))
router.use('/users', require('../routers/master-data/user.router'))

router.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Backend is running well!',
    })
})

router.get('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Resource not found',
    })
})

router.post('/', (req, res) => {
    const { ref } = req.body

    if (ref === 'refs/heads/main') {
        const projectPath = '~/runlapan-backend'

        exec(`cd ${projectPath} && git pull`, (error, stdout) => {
            if (error) {
                console.error(`Error: ${error.message}`)
                return res
                    .status(500)
                    .send('Error occurred while updating the codebase')
            }

            exec(
                `cd ${projectPath} && npm install && npm run dev`,
                (error, stdout) => {
                    if (error) {
                        console.error(`Error: ${error.message}`)
                        return res
                            .status(500)
                            .send(
                                'Error occurred while restarting the application'
                            )
                    }
                    console.log(`Application restarted: ${stdout}`)
                    res.status(200).send(
                        'Codebase updated and application restarted successfully'
                    )
                }
            )

            console.log(`Codebase updated: ${stdout}`)
            res.status(200).send('Codebase updated successfully')
        })
    } else {
        console.log('Not the main branch. No action taken.')
        res.status(200).send('No action taken')
    }
})

module.exports = router
