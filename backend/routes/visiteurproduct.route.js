const express = require('express');
const app = express();
const productRoute = express.Router();
// product model
let product = require('../models/product');
// Add product
productRoute.route('/create').post((req, res, next) => {
  product.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All products
productRoute.route('/').get((req, res) => {
  product.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single product
productRoute.route('/read/:id').get((req, res) => {
  product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update product
productRoute.route('/update/:id').put((req, res, next) => {
  product.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete product
productRoute.route('/delete/:id').delete((req, res, next) => {
  product.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = productRoute;