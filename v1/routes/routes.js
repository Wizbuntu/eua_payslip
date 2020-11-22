// require modules
const express = require('express')


// Read excel file
const readXlsxFile = require('read-excel-file')


// Nodemailer
const nodemailer = require('nodemailer')


// emailSMTP
// const emailSMTP = require('../../utils/emailSMTP')
// const smtpTransport = require('../../utils/emailSMTP')


// invoke express router func
const router = express.Router()



// Routes
router.post('/upload/payslip', (req, res) => {

    // init array
    const excelData = []

    console.log(req.files)

    // get file
    const file = req.files
    if (file) {

        // console.log(file.file.data)
        // pass to read excel file
        readXlsxFile(file.file.data)
            .then((rows) => {
                for (i in rows) {
                    // push to excelData
                    excelData.push(rows[i])
                }

                // remove first element
                excelData.shift()

                // init smtpTransport
                const smtpTransport = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.EMAILPASS
                    }
                });

                // loop through excelData
                excelData.forEach((xlsxData) => {
                    // init mail options
                    const mailOptions = {
                        from: process.env.EMAIL,
                        to: xlsxData[18],
                        subject: "Payslip",
                        html: `
                                <h1 style="color: #173b80; text-align: center;"> EVANGEL UNIVERSITY AKAEZE </h1>
                                <hr>
                                <h2 style="text-align: center;"> ${xlsxData[17]} ${xlsxData[16]} Pay Advice For ${xlsxData[1]} </h2>
                                
                                <hr>

                                <p><b> 1. NAME: </b> ${xlsxData[1]} </p>
                                <p><b> 2. DEPARTMENT: </b> ${xlsxData[2]} </p>
                                <p><b> 3. SALARY LEVEL: </b> ${xlsxData[3]} </p>
                                <p><b> 4. NET PAY:  </b> ${xlsxData[4]} </p>
                                <p><b>DEDUCTIONS: </b></p>
                                <p><b> i. Pension: </b> ${xlsxData[5]} </p>
                                <p><b> ii. Tax: </b> ${xlsxData[6]} </p>
                                <p><b> iii. Cooperative Contrib: </b> ${xlsxData[7]} </p>
                                <p><b> iv. Cooperative Loan: </b> ${xlsxData[8]} </p>
                                <p><b> v. Others: </b> ${xlsxData[9]} </p>
                                <p><b> 5. TOTAL DEDUCTIONS:  </b> ${xlsxData[10]} </p>
                                <p><b> 6. PENSION EMPLOYER:  </b> ${xlsxData[11]} </p>
                                <p><b> 7. BANK:  </b> ${xlsxData[12]} </p>
                                <p><b> 8. ACCOUNT NUMBER:  </b> ${xlsxData[13]} </p>
                                <p><b> 9. PFA:  </b> ${xlsxData[14]} </p>
                                <p><b> 10. TOTAL/ ANNUM:  </b> ${xlsxData[15]} </p>

                                <hr>
                                <p style="text-align: center; font-size: 12px">Copyright © 2019 Evangel University Akaeze. All rights reserved. </p>
                                
                        `
                    }


                    // send email
                    smtpTransport.sendMail(mailOptions, (error, success) => {
                        if (error) {
                            console.log(error)
                            return res.status(400).json({
                                success: false,
                                error: error
                            })
                        }

                        // if success
                        if (success) {
                            console.log("success")
                            return res.json({
                                success: true,
                                message: "Payslip Sent Successfully"
                            })
                        }

                    })


                })



            })
            .catch((error) => {
                console.log(error)
                return res.status(400).json({
                    success: false,
                    error
                })
            })

    } else {
        return res.json({
            success: false,
            message: "No file found"
        })
    }


})


// export
module.exports = router