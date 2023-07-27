const express = require('express');
const app = express();
const userprofilRoute = express.Router();
// userprofil model
let userprofil = require('../models/userprofil');
// Add userprofil
userprofilRoute.route('/create').post((req, res, next) => {
  userprofil.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All userprofils
userprofilRoute.route('/').get((req, res) => {
  userprofil.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single userprofil
userprofilRoute.route('/read/:id').get((req, res) => {
  userprofil.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update userprofil
userprofilRoute.route('/update/:id').put((req, res, next) => {
  userprofil.findByIdAndUpdate(req.params.id, {
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
// Delete userprofil
userprofilRoute.route('/delete/:id').delete((req, res, next) => {
  userprofil.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = userprofilRoute;