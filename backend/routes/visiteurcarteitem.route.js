const express = require('express');
const app = express();
const carteitemRoute = express.Router();
// carteitem model
let carteitem = require('../models/carteitem');
// Add carteitem
carteitemRoute.route('/create').post((req, res, next) => {
  carteitem.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All carteitems
carteitemRoute.route('/').get((req, res) => {
  carteitem.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single carteitem
carteitemRoute.route('/read/:id').get((req, res) => {
  carteitem.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update carteitem
carteitemRoute.route('/update/:id').put((req, res, next) => {
  carteitem.findByIdAndUpdate(req.params.id, {
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
// Delete carteitem
carteitemRoute.route('/delete/:id').delete((req, res, next) => {
  carteitem.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = carteitemRoute;