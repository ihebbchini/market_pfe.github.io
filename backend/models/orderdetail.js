const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let orderdetail = new Schema({
   userid: {
      type: String
   },
   total: {
      type: String
   },
   paimentid: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }
}, {
   collection: 'orderdetails'
})
module.exports = mongoose.model('orderdetail', orderdetail)