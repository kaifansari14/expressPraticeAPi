import express from "express";
import dotenv from "dotenv";
dotenv.config()

let PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/test", (req,res) => {
    try {
        res.status(200).json({ msg: 'Server is running'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.post("/addtwo", (req,res) => {
    try {
        let num1 = req.body.a
        let num2 = +req.body.b
        let total = num1 + num2 
        res.status(200).json({ msg: total})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.post("/multitwo", (req,res) => {
    try {
        let num1 = req.body.a
        let num2 = +req.body.b
        let total = num1 * num2
        res.status(200).json({ msg: total})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

app.post("/evenodd", (req,res) => {
    let num1 = req.body.a
    let even = +num1 % 2 == 0
    if (even) {
        res.status(200).json({msg:`${num1} is even`});
    } else {
        res.status(200).json({msg:`${num1} is odd `})
    } 
    }
)

app.post("/reverse", (req,res) => {
    let a= req.body.string
    let reverse = a.split('').reverse().join('')
    res.status(200).json({msg: reverse})
    }
)

app.post("/palin", (req,res) => {
    let a = req.body.string
    let reverse = a.split('').reverse().join('')
    if (a == reverse) {
        res.status(200).json({msg: "Its a palindrom string "})
    } else {
        res.status(200).json({msg: "Its not a palindrom string "})
    }
    res.status(200).json({msg: reverse})
})

app.post("/vowel", (req,res) =>{
    let alpha = req.body.string
    let split = req.body.string
})
app.listen(PORT, () => {
    console.log(`SERVER IS LIVE AT http://localhost:${PORT}`);
})