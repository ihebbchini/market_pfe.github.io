const express = require('express');
const app = express();
const orderdetailRoute = express.Router();
// orderdetail model
let orderdetail = require('../models/orderdetail');
let notification = require('../models/notification');
// Add orderdetail
orderdetailRoute.route('/create').post((req, res, next) => {
  orderdetail.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  const post = new notification({
    idenvoie: "USER",
    idreception: "USER",
    titre: "Operation de creation par ADMIN",
    texte: "Operation de creation user par ADMIN",
    etat: "en cours",
    datecreation: new Date(),
    datemodification: new Date(),

  })
  post.save();

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
  const post = new notification({
    idenvoie: "USER",
    idreception: "USER",
    titre: "Operation de modification par ADMIN",
    texte: "Operation de modification user par ADMIN",
    etat: "en cours",
    datecreation: new Date(),
    datemodification: new Date(),

  })
  post.save();
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
  const post = new notification({
    idenvoie: "USER",
    idreception: "USER",
    titre: "Operation de suppression par ADMIN",
    texte: "Operation de suppression user par ADMIN",
    etat: "en cours",
    datecreation: new Date(),
    datemodification: new Date(),

  })
  post.save();
})
module.exports = orderdetailRoute;