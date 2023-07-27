const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let admin = new Schema({
   email: {
      type: String
   },
   password: {
      type: String
   }

}, {
   collection: 'admins'
})
module.exports = mongoose.model('admin', admin)