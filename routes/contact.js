
const express = require('express')

const path = require('path')

const router = express.Router();

const controllercontact = require('../controllers/products')

router.get('/contact', controllercontact.contactus);

  router.post('/success', (req, res, next) => {
    console.log(req.body); 
    res.redirect('/sucessfull');
  });

module.exports = router;


