const express = require('express');
const app = express();
const userpaiementRoute = express.Router();
// userpaiement model
let userpaiement = require('../models/userpaiement');
// Add userpaiement
userpaiementRoute.route('/create').post((req, res, next) => {
  userpaiement.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All userpaiements
userpaiementRoute.route('/').get((req, res) => {
  userpaiement.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single userpaiement
userpaiementRoute.route('/read/:id').get((req, res) => {
  userpaiement.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update userpaiement
userpaiementRoute.route('/update/:id').put((req, res, next) => {
  userpaiement.findByIdAndUpdate(req.params.id, {
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
// Delete userpaiement
userpaiementRoute.route('/delete/:id').delete((req, res, next) => {
  userpaiement.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = userpaiementRoute;