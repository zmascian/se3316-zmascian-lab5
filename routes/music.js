const router = require('express').Router();
const Song = require('../model/Song');
const {songValidation} = require('../validation');
const verification = require('./verifyToken');

//Get all songs
router.get('/getsongs', function(req,res){
        Song.find(function(err, s){
            if (err) return res.send(err);
            res.json(s);
        });

    // res.json(Song.find({}));
});



//Add song
router.put('/putsongs', async (req,res)=>{
        //Validate    
        const {error} = songValidation(req.body);
        if(error != null) {
            return res.status(400).send(error.details[0].message);
        }
        //Checking if the song is already in the database
        const songExist = await Song.findOne({title: req.body.title});
        if(songExist) return res.status(400).send('Email already exist');


    //Create new song    
       let s = new Song({
           title: req.body.title,
           artist: req.body.artist,
           album: req.body.album,
           genre: req.body.genre,
           year: req.body.year,
           recentReview: req.body.recentReview,
           avgRating: req.body.avgRating,
           numOfReviews: req.body.numOfReviews
           
       })
       try{
            s.save();
            res.send(s);     
       }catch(err){
           res.status(400).send(err);
       }       
});


module.exports = router