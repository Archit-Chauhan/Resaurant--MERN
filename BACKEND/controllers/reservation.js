const Reservation = require("../models/reservationSchema");

exports.sendReservation = async(req,res) => {
    const {firstName,lastName,email,phone,date,time} = req.body;
    if(!firstName||!lastName||!email||!phone||!date||!time){
        return res.status(400).json({
            success:false,
            message:"Please fill all the fields"
        })
    }
    try{
        await Reservation.create({firstName,lastName,email,phone,date,time});
        res.status(200).json({
            success:true,
            message:"Reservation Sent Sucessfully !"
        })
    }catch(error){
        if (error.name === 'ValidationError') {
            const message = Object.values(error.errors).map(val => val.message).join(', ');
            return res.status(400).json({
              success: false,
              message: message
            });
          } else {
            return res.status(500).json({
              success: false,
              message: 'An error occurred while creating the reservation.'
            });
          }

    }

}