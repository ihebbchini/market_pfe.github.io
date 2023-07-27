const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let userpaiement = new Schema({
   userid: {
      type: String
   },
   paimenttype: {
      type: String
   },
   provider: {
      type: String
   },
   acountnumero: {
      type: String
   },
   dateexpiration: {
      type: String
   }

}, {
   collection: 'userpaiements'
})
module.exports = mongoose.model('userpaiement', userpaiement)