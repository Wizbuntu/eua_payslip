// require modules
const express = require('express')
const morgan = require('morgan')
const dotEnv = require('dotenv')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const fileupload = require("express-fileupload");
const path = require('path')



// routes
const Routes = require('./v1/routes/routes')


// invoke express method
const app = express()



// Middlewares
// dotenv
dotEnv.config()

// morgan
app.use(morgan('dev'))

// bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(fileupload());

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "public", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});


// routes
app.use('/v1/api', Routes)


// listen
const PORT = process.env.PORT || 2001
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})