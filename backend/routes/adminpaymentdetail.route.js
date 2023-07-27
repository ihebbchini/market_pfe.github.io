const express = require('express');
const app = express();
const paymentdetailRoute = express.Router();
// paymentdetail model
let paymentdetail = require('../models/paymentdetail');
let notification = require('../models/notification');
// Add paymentdetail
paymentdetailRoute.route('/create').post((req, res, next) => {
  paymentdetail.create(req.body, (error, data) => {
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
module.exports = paymentdetailRoute;