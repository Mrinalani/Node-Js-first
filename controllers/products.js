const Product = require('../models/Product');


const path = require('path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  }



  exports.postAddProduct = (req, res, next) => {
     const product = new Product(req.body.title)
     product.save()
    // console.log(req.body); 
    res.redirect('/');
  }



  exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products)
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
  }

 
  exports.contactus = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'))
  }

  exports.getsucessfulpage = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'sucessful.html'))
  }

