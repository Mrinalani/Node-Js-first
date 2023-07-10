const express = require('express')

const path = require('path')

const router = express.Router();

const productcontroller = require('../controllers/products')

router.get('/',productcontroller.getProducts);

module.exports = router;