const path = require('path');

exports.getAddProduct = (req, res, next) => {
    console.log('in another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  }



  exports.postAddProduct = (req, res, next) => {
    console.log(req.body); 
    res.redirect('/');
  }



  exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
  }

 
  exports.contactus = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'))
  }

  exports.getsucessfulpage = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'sucessful.html'))
  }

