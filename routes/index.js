const router = require('express').Router()

//router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags=['Site Index']
    res.send('Joshua Beale | CSE 341 - Week 3 | Project 2 (Pt 1)')
})

router.use('/owners', require('./owners'))
router.use('/dogs', require('./dogs'))

module.exports = router