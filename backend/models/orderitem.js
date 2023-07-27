const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let orderitem = new Schema({
   orderid: {
      type: String
   },
   productid: {
      type: String
   },
   quantite: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }
}, {
   collection: 'orderitems'
})
module.exports = mongoose.model('orderitem', orderitem)