const mongoose = require('mongoose');
const validator = require('validator');

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength : [3,"First name must contain at least 3 characters !"],
        maxlength : [30,"First name cannot exceed 30 characters !"]
    },
    lastName:{
        type:String,
        required:true,
        minLength : [3,"Last name must contain at least 3 characters !"],
        maxlength : [30,"Last name cannot exceed 30 characters !"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid mail"]
    },
    phone:{
        type:String,
        required:true,
        minLength : [10,"Phone number must contain only 10 digits !"],
        maxlength : [10,"Phone number must contain only 10 digits !"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("Reservation",reservationSchema)