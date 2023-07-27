const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let paymentdetail = new Schema({
   orderid: {
      type: String
   },
   amount: {
      type: String
   },
   provider: {
      type: String
   },
   status: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }

}, {
   collection: 'paymentdetails'
})
module.exports = mongoose.model('paymentdetail', paymentdetail)