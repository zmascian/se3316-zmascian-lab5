const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment:{
    type: String,
    max: 255
    },
    rating:{
        type: Number,
        max: 6
    }  
    
})


module.exports = mongoose.model('Review', reviewSchema);