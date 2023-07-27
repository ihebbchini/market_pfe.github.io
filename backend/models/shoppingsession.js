const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let shoppingsession = new Schema({
   userid: {
      type: String
   },
   total: {
      type: String
   },
   datecreation: {
      type: String
   },
   datemodification: {
      type: String
   }

}, {
   collection: 'shoppingsessions'
})
module.exports = mongoose.model('shoppingsession', shoppingsession)