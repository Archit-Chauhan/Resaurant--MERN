const mongoose = require('mongoose');

exports.dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Database connected"))
    .catch((error)=>console.log("Database not connected ",error))
}