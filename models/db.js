const mongoose = require('mongoose')

const url ="mongodb://harshsingh:bILLIONAIRE%4026@ds259711.mlab.com:59711/heroku_xt39rsk7";
mongoose.connect(url , {useNewUrlParser:true},(err) => {
    if(!err){
        console.log('MONGODB CONNECTION HO GAYA');
    }
    else{
        console.log('MONGODB CONNECTION FAIL HOGAYA YAAR '+err );
    }
})

var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({

    title:{
        type:String
    },
    description:{
        type:String
    },
    link:{
        type:String
    },
    githublink:{
        type:String
    },
    imagename:{
        type:String
    }
})

module.exports = {modelClass : mongoose.model('collectionofprojects',userSchema)};




















