require("dotenv").config({quiet: true})
const app = require("./src/app.js")
const connectToDB = require("./src/config/database.connection.js")

const PORT = process.env.PORT || 3000

const startServer = async () => {
    try{
        await connectToDB()

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    } catch(err){
        console.error("Failed to connect database server:", err.message)
        process.exit(1)
    }
}
startServer()