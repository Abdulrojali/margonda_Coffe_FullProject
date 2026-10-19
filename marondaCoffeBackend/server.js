const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI =process.env.db_url; 
const connectDB =async ()=>{
    await mongoose.connect(mongoURI)
};

// Export koneksi agar bisa dipanggil sekali saja
module.exports = connectDB;