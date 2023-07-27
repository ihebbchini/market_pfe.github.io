const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let categorieproduct = new Schema({
   name: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }  

}, {
   collection: 'categorieproducts'
})
module.exports = mongoose.model('categorieproduct', categorieproduct)