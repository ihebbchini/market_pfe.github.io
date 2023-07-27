const express = require('express');
const app = express();
const inventoryproductRoute = express.Router();
// inventoryproduct model
let inventoryproduct = require('../models/inventoryproduct');
// Add inventoryproduct
inventoryproductRoute.route('/create').post((req, res, next) => {
  inventoryproduct.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All inventoryproducts
inventoryproductRoute.route('/').get((req, res) => {
  inventoryproduct.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single inventoryproduct
inventoryproductRoute.route('/read/:id').get((req, res) => {
  inventoryproduct.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update inventoryproduct
inventoryproductRoute.route('/update/:id').put((req, res, next) => {
  inventoryproduct.findByIdAndUpdate(req.params.id, {
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
// Delete inventoryproduct
inventoryproductRoute.route('/delete/:id').delete((req, res, next) => {
  inventoryproduct.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = inventoryproductRoute;