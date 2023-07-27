const express = require('express');
const app = express();
const categorieproductRoute = express.Router();
// categorieproduct model
let categorieproduct = require('../models/categorieproduct');
let notification = require('../models/notification');
// Add categorieproduct
categorieproductRoute.route('/create').post((req, res, next) => {
  categorieproduct.create(req.body, (error, data) => {
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
// Get All categorieproducts
categorieproductRoute.route('/').get((req, res) => {
  categorieproduct.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single categorieproduct
categorieproductRoute.route('/read/:id').get((req, res) => {
  categorieproduct.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update categorieproduct
categorieproductRoute.route('/update/:id').put((req, res, next) => {
  categorieproduct.findByIdAndUpdate(req.params.id, {
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
// Delete categorieproduct
categorieproductRoute.route('/delete/:id').delete((req, res, next) => {
  categorieproduct.findOneAndRemove(req.params.id, (error, data) => {
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
module.exports = categorieproductRoute;