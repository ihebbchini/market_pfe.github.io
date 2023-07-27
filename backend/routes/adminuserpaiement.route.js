const express = require('express');
const app = express();
const userpaiementRoute = express.Router();
// userpaiement model
let userpaiement = require('../models/userpaiement');
let notification = require('../models/notification');
// Add userpaiement
userpaiementRoute.route('/create').post((req, res, next) => {
  userpaiement.create(req.body, (error, data) => {
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
module.exports = userpaiementRoute;