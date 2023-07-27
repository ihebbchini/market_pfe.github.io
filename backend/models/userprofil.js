const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let userprofil = new Schema({
   name: {
      type: String
   },
   adresse: {
      type: String
   },
   phone: {
      type: String
   },
   specialite: {
      type: String
   },
   avatar: {
      type: String
   },
   description: {
      type: String
   }

}, {
   collection: 'userprofils'
})
module.exports = mongoose.model('userprofil', userprofil)