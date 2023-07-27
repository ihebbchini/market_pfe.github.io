const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let discount = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   pourcentage: {
      type: String
   },
   active: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }

}, {
   collection: 'discounts'
})
module.exports = mongoose.model('discount', discount)