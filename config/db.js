const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB_URI = process.env.DB_URI;

const db = async () => {
    try {
        const connect = await mongoose.connect(DB_URI);
        console.log("Tos tersambung ka Mongo DB na a😊");
    } catch (error) {
        console.error(error);
    }
}

module.exports = db;