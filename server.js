const express = require("express")
const dotenv = require("dotenv").config()
const routes = require("./routes/contactRoute")

const app = express()

const port = process.env.PORT || 5000

//a middleware to parse the datastream we recieved from a req from client on server side
app.use(express.json())
//The app.use is known as a middle ware
app.use("/api/contacts", routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}....`)
})