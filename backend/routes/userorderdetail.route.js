const express = require('express');
const app = express();
const orderdetailRoute = express.Router();
// orderdetail model
let orderdetail = require('../models/orderdetail');
// Add orderdetail
orderdetailRoute.route('/create').post((req, res, next) => {
  orderdetail.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All orderdetails
orderdetailRoute.route('/').get((req, res) => {
  orderdetail.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single orderdetail
orderdetailRoute.route('/read/:id').get((req, res) => {
  orderdetail.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update orderdetail
orderdetailRoute.route('/update/:id').put((req, res, next) => {
  orderdetail.findByIdAndUpdate(req.params.id, {
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
// Delete orderdetail
orderdetailRoute.route('/delete/:id').delete((req, res, next) => {
  orderdetail.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = orderdetailRoute;