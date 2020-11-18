const express = require('express')
const helmet = require('helmet')
const taxCalc = require('./taxCalc')
const PORT = process.env.PORT || 5000

const app = express()

app.use(helmet())

app.listen(PORT, () => {
    console.log("Server started")
})

app.get("/", (req, res) => {
    res.send("Welcome to the Tax Calculator API")
})

app.put("/:income", (req, res) => {
    const taxInfo = {
        income : 0,
        tax : 0,
        netIncome : 0
    }
    taxInfo.income = req.params.income
    taxInfo.tax = taxCalc.taxCalc(taxInfo.income)
    taxInfo.netIncome = taxInfo.income - taxInfo.tax
    console.log(req.params)
    res.json({taxInfo})
   // res.send("hello")
}) 