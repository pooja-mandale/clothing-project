const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })

const app = express()
app.use(cors({
    origin: process.env.NODE_ENV === "production" 
        ? "https://clothing-project-eight.vercel.app/" 
        : "http://localhost:5173", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(cookieParser())
app.use(express.json())
// app.use(express.static("dist"))

app.use('/api/users', require('./routes/user.route'))
app.use('/api/admin', require('./routes/admin.route'))


app.use((req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
    // res.sendFile(path.join(__dirname, "dist", "index.html"))
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, () => console.log("SERVER RUNNING 🏃‍♂️"))
})