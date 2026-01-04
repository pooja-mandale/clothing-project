const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()

// 1. Fixed CORS: Removed the trailing slash from the production URL
app.use(cors({
    origin: process.env.NODE_ENV === "production" 
        ? "https://clothing-project-eight.vercel.app" 
        : "http://localhost:5173", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(cookieParser())
app.use(express.json())

// 2. Routes
// Add ../ to look outside the api folder
app.use('/api/users', require('../routes/user.route'))
app.use('/api/admin', require('../routes/admin.route'))

// 3. Database Connection (Standard for Serverless)
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MONGO CONNECTED"))
    .catch(err => console.error("MONGO ERROR:", err))

// 4. Global Error Handlers
app.use((req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})

// 5. IMPORTANT: DO NOT wrap module.exports in the database listener
// Vercel needs to find 'app' immediately.
if (process.env.NODE_ENV !== "production") {
    app.listen(process.env.PORT || 5000, () => console.log("SERVER RUNNING LOCAL"))
}

module.exports = app;