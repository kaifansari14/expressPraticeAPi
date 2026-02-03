import express from "express";
import dotenv from "dotenv"
import nodemailer from "./utils/mailers.js";
dotenv.config()

let PORT = process.env.PORT;

const app = express();
app.use(express.json());
// mailr API

app.get("/mail", (req,res) => {
    try {


        
        res.status(200).json({ msg: 'Server is running'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})



app.listen(PORT, () =>{
    console.log(`SERVER IS LIVE http://localhost:${PORT}`);
})