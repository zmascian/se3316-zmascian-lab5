const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title:{
    type: String,
    required: true,
    max: 255
    },
    artist:{
        type: String,
        max: 255
    },
    album:{
        type: String,
        max: 255
    },
    genre:{
        type: String,
        max: 255
    },
    year:{
        type: Number,
    },
    recentReview:{
        type: String,
        max: 255
    },
    avgRating:{
        type: Number,
        required: true,
        max: 255
    },
    numOfReviews:{
        type: Number,
        required: true,
        max: 255
    }
    
})


module.exports = mongoose.model('Song', songSchema);