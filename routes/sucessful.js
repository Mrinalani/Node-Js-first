const express = require('express')

const path = require('path')

const router = express.Router();

router.post('/sucess', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'sucessful.html'))
  });

module.exports = router;