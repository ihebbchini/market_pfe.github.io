const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let user = new Schema({
   email: {
      type: String
   },
   password: {
      type: String
   }

}, {
   collection: 'users'
})
module.exports = mongoose.model('user', user)