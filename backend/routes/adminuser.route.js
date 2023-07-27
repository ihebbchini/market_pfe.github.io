const express = require('express');
const app = express();
const userRoute = express.Router();
// user model
let user = require('../models/user');
let notification = require('../models/notification');
// Add user
userRoute.route('/create').post((req, res, next) => {
  user.create(req.body, (error, data) => {
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
// Get All users
userRoute.route('/').get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single user
userRoute.route('/read/:id').get((req, res) => {
  user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
userRoute.route('/update/:id').put((req, res, next) => {
  user.findByIdAndUpdate(req.params.id, {
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
// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
  user.findOneAndRemove(req.params.id, (error, data) => {
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
module.exports = userRoute;