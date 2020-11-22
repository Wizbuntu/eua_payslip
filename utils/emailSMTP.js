// require nodemailer
const nodemailer = require('nodemailer')


// dot env
const dotEnv = require('dotenv')
dotEnv.config()



// nodemailer create Transport

// init smtpTransport
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASS
    }
});



// export
module.exports = smtpTransport