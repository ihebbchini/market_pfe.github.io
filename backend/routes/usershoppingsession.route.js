const express = require('express');
const app = express();
const shoppingsessionRoute = express.Router();
// shoppingsession model
let shoppingsession = require('../models/shoppingsession');
// Add shoppingsession
shoppingsessionRoute.route('/create').post((req, res, next) => {
  shoppingsession.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All shoppingsessions
shoppingsessionRoute.route('/').get((req, res) => {
  shoppingsession.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single shoppingsession
shoppingsessionRoute.route('/read/:id').get((req, res) => {
  shoppingsession.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update shoppingsession
shoppingsessionRoute.route('/update/:id').put((req, res, next) => {
  shoppingsession.findByIdAndUpdate(req.params.id, {
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
// Delete shoppingsession
shoppingsessionRoute.route('/delete/:id').delete((req, res, next) => {
  shoppingsession.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = shoppingsessionRoute;