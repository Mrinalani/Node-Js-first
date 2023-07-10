const express = require('express');

// const path = require('path');

const router = express.Router();

const productcontroller = require('../controllers/products')

  router.get('/add-product',productcontroller.getAddProduct );
  
  router.post('/add-product',productcontroller.postAddProduct );

module.exports = router;