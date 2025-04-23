const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    feedback:{
        type:String,
        required:true,
    }
})

const reviewModel = mongoose.model('review',reviewSchema);
module.exports = reviewModel;