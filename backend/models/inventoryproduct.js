const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let inventoryproduct = new Schema({
   qte: {
      type: String
   },
   idproduct: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }
}, {
   collection: 'inventoryproducts'
})
module.exports = mongoose.model('inventoryproduct', inventoryproduct)