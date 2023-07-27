const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let product = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   categorieid: {
      type: String
   },
   inventoryid: {
      type: String
   },
   price: {
      type: String
   },
   discountid: {
      type: String
   },
   picture: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   },
   userid: {
      type: String
   }
}, {
   collection: 'products'
})
module.exports = mongoose.model('product', product)