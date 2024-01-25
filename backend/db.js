const mongoose = require('mongoose');

const url= "mongodb+srv://admin:1234@cluster0.pbfmoge.mongodb.net/Qa-mern";

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    } ).then(()=>{
        console.log("MongoDB connected successfully")
    }).catch((error)=> console.log("Error: ",error));
};