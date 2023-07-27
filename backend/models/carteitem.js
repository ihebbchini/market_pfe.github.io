const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let carteitem = new Schema({
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
   collection: 'carteitems'
})
module.exports = mongoose.model('carteitem', carteitem)