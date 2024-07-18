
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const app = express();

dotenv.config({path:'../.env'})

const transporter = nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    auth:{
        user:process.env.EMAIL_SENDER,
        pass:process.env.EMAIL_PASS,
    }
});

app.use(cors());
app.use(bodyParser.json());



app.post('/api/sendMessage', (req,res)=>{
    const {_email:email, _name:name, _message} = req.body;
    
    const mailOptions = {
        from:process.env.EMAIL_SENDER,
        to:process.env.EMAIL_RECIEVER,
        subject:`IXTIX Website, new message from ${name}`,
        text: email + '\n' + _message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return res.status(500).json({message:'Error sending message', messageCode:400})
        }
        res.status(200).json({message:'Message sent successfully',messageCode:200})
    })
})  


app.listen(process.env.PORT, ()=>{
    console.log('app is listening on Port' + process.env.PORT)
})