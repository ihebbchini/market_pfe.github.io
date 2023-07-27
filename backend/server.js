const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/marketdatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
// Setting up port with express js

///////////////////////////////////////////////////////////////////

const adminadminRoute = require('../backend/routes/adminadmin.route')

const adminproductRoute = require('../backend/routes/adminproduct.route')
const admincarteitemRoute = require('../backend/routes/admincarteitem.route')
const admincategorieproductRoute = require('../backend/routes/admincategorieproduct.route')
const admindiscountRoute = require('../backend/routes/admindiscount.route')
const admininventoryproductRoute = require('../backend/routes/admininventoryproduct.route')
const adminmessageRoute = require('../backend/routes/adminmessage.route')
const adminnotificationRoute = require('../backend/routes/adminnotification.route')
const adminorderdetailRoute = require('../backend/routes/adminorderdetail.route')
const adminorderitemRoute = require('../backend/routes/adminorderitem.route')
const adminpaymentdetailRoute = require('../backend/routes/adminpaymentdetail.route')
const adminshoppingsessionRoute = require('../backend/routes/adminshoppingsession.route')
const adminuserRoute = require('../backend/routes/adminuser.route')
const adminuserpaiementRoute = require('../backend/routes/adminuserpaiement.route')
const adminuserprofilRoute = require('../backend/routes/adminuserprofil.route')


///////////////////////////////////////////////////////////////////

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))

/////////////////////////////////////////////////////////////////

app.use('/adminapiadmin', adminadminRoute) 
app.use('/adminapiproduct', adminproductRoute) 
app.use('/adminapicarteitem', admincarteitemRoute) 
app.use('/adminapicategorieproduct', admincategorieproductRoute) 
app.use('/adminapidiscount', admindiscountRoute) 
app.use('/adminapiinventoryproduct', admininventoryproductRoute) 
app.use('/adminapimessage', adminmessageRoute) 
app.use('/adminapinotification', adminnotificationRoute) 
app.use('/adminapiorderdetail', adminorderdetailRoute) 
app.use('/adminapiorderitem', adminorderitemRoute) 
app.use('/adminapipaymentdetail', adminpaymentdetailRoute) 
app.use('/adminapishoppingsession', adminshoppingsessionRoute) 
app.use('/adminapiuser', adminuserRoute) 
app.use('/adminapiuserpaiement', adminuserpaiementRoute) 
app.use('/adminapiuserprofil', adminuserprofilRoute) 







/////////////////////////////////////////////////////////////////
// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})