const router = require('express').Router()
//Send data to client
router.get('/test', (req,res) => { 
    res.json("It worked?")
})

module.exports = router