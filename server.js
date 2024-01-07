const express = require("express")
const dotenv = require("dotenv").config()
const routes = require("./routes/contactRoute")

const app = express()

const port = process.env.PORT || 5000

//The app.use is known as a middle ware
app.use("/api/contacts", routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}....`)
})