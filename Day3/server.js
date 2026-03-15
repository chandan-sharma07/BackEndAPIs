// Importing the app from app.js
// Database se connect karna
require("dotenv").config({ quiet: true }) // Load environment variables from .env file

const app = require('./src/app')
const connectDB = require("./src/config/database")

const PORT = process.env.PORT || 3000

const startServer = async () => {

    try {

        await connectDB()

        console.log("MongoDB connected")

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })

    } catch (err) {

        console.error("Failed to connect to MongoDB:", err.message)
        process.exit(1)

    }

}

startServer()

