const express = require('express')

const path = require('path')

const router = express.Router();

const controllersucces = require('../controllers/products')

router.post('/sucess',controllersucces.getsucessfulpage);

module.exports = router;