const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 1000
    },
    comment:{
    type: String,
    max: 255
    },
    rating:{
        type: Number,
        max: 6
    },  
    songId: {
        type: String,
        required: true
    }
    
})


module.exports = mongoose.model('Review', reviewSchema);