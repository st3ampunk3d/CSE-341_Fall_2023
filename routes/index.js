const router = require('express').Router()
const passport = require('passport')

router.use('/', require('./swagger'))

//router.get('/', (req, res) => {
    //#swagger.tags=['Site Index']
//    res.send('Joshua Beale | CSE 341 - Week 3 | Project 2 (Pt 1)')
//})

router.get('/login', passport.authenticate('github'), (req, res) => {})

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err)}
        res.redirect('/')
    })
})

router.use('/owners', require('./owners'))
router.use('/dogs', require('./dogs'))

module.exports = router