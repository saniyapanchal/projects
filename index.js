const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretkey";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema ({
    email: {
        type: "string",
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: "string",
        required: true,
    },
})

UserSchema.pre("save", async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }catch(err){
        next(err);
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;

app.get("/",(req, resp) =>{
    resp.json({
        message:"a simple api"
    })
})


app.post("/login",(req, resp) =>{
    const user={
        id:1,
        username:"saniya",
        email:"saniya@gmail.com",
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        resp.json({
            token
        })
    })
})

app.post("/profile",verifyToken,(req, resp)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            resp.send({result: "Invalid Token"})
        }else{
            resp.json({
                message:"profile accessed successfully",
                authData
            })
        }
    })
})

function verifyToken(req,resp,next){
const bearerHeader = req.headers['authorization'];
if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(" ");
const token = bearer[1];
req.token = token;
next();
}else{
    resp.send({
        result:'Token is not valid'
    })
}
}

app.listen(5000,()=>{
    console.log("app is running at port 5000")
})

