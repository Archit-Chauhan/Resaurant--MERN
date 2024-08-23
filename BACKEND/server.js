const express = require("express");
const app = express();
const {dbConnect} = require("./config/database");
const cors = require("cors");
const Routes = require("./routes/reservationRoute")

require('dotenv').config()

app.use(
    cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','PUT','POST','DELETE'],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/v1/reservation',Routes);



dbConnect();

app.listen(process.env.PORT,()=>{
    console.log(`App is running at ${process.env.PORT}`)
})