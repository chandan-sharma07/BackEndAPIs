//create a file named database.js in the config folder and add the following code to connect to MongoDB using Mongoose
const mongoose = require('mongoose')
const MONGO_URI=process.env.MONGO_URI

const connectDB = async () => {

    try {
        await mongoose.connect(MONGO_URI)

        console.log('MongoDB connected successfully')

    } catch (err) {

        console.error('MongoDB connection failed:', err.message)
        process.exit(1)

    }

}

module.exports = connectDB