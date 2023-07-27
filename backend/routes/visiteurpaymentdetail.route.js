const express = require('express');
const app = express();
const paymentdetailRoute = express.Router();
// paymentdetail model
let paymentdetail = require('../models/paymentdetail');
// Add paymentdetail
paymentdetailRoute.route('/create').post((req, res, next) => {
  paymentdetail.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All paymentdetails
paymentdetailRoute.route('/').get((req, res) => {
  paymentdetail.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single paymentdetail
paymentdetailRoute.route('/read/:id').get((req, res) => {
  paymentdetail.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update paymentdetail
paymentdetailRoute.route('/update/:id').put((req, res, next) => {
  paymentdetail.findByIdAndUpdate(req.params.id, {
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
// Delete paymentdetail
paymentdetailRoute.route('/delete/:id').delete((req, res, next) => {
  paymentdetail.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = paymentdetailRoute;