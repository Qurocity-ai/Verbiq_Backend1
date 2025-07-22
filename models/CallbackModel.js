
const mongoose = require('mongoose');
const Schema=new mongoose.Schema({
    name:{type:String,requireed:true},
    emailId:{type:String,required:true},
    number:{type:Number,required:true},
    comment:{type:String},
})


const CallbackModel = mongoose.model('Callback',Schema);

module.exports = CallbackModel;