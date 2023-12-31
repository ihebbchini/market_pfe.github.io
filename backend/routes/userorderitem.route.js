const express = require('express');
const app = express();
const orderitemRoute = express.Router();
// orderitem model
let orderitem = require('../models/orderitem');
// Add orderitem
orderitemRoute.route('/create').post((req, res, next) => {
  orderitem.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All orderitems
orderitemRoute.route('/').get((req, res) => {
  orderitem.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single orderitem
orderitemRoute.route('/read/:id').get((req, res) => {
  orderitem.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update orderitem
orderitemRoute.route('/update/:id').put((req, res, next) => {
  orderitem.findByIdAndUpdate(req.params.id, {
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
// Delete orderitem
orderitemRoute.route('/delete/:id').delete((req, res, next) => {
  orderitem.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = orderitemRoute;