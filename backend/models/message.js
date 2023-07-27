const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let message = new Schema({
   idenvoie: {
      type: String
   },
   idreception: {
      type: String
   },
   titre: {
      type: String
   },
   texte: {
      type: String
   },
   etat: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }
}, {
   collection: 'messages'
})
module.exports = mongoose.model('message', message)