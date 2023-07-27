const express = require('express');
const app = express();
const discountRoute = express.Router();
// discount model
let discount = require('../models/discount');
// Add discount
discountRoute.route('/create').post((req, res, next) => {
  discount.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All discounts
discountRoute.route('/').get((req, res) => {
  discount.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single discount
discountRoute.route('/read/:id').get((req, res) => {
  discount.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update discount
discountRoute.route('/update/:id').put((req, res, next) => {
  discount.findByIdAndUpdate(req.params.id, {
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
// Delete discount
discountRoute.route('/delete/:id').delete((req, res, next) => {
  discount.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = discountRoute;