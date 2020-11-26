const express = require('express')
const ctrl = require('../controller/details')

const router = new express.Router()

router.post('/details',ctrl.postDetails)

module.exports = router;