const router = require('express').Router();
const Song = require('../model/Song');
const {songValidation} = require('../validation');

//Get all songs
router.get('/getsongs', function(req,res){


        Song.find(function(err, s){
            if (err) return res.send(err);
            res.json(s);
        });

    // res.json(Song.find({}));
});

//Get all songs
router.put('/putsongs', async (req,res)=>{
        //Validate    
        console.log("made it to post3");
        const {error} = songValidation(req.body);
        if(error != null) {
            console.log("made it to post3");
            return res.status(400).send(error.details[0].message);
        }
        console.log("made it to post3");
        //Checking if the song is already in the database
        const songExist = await Song.findOne({title: req.body.title});
        console.log("made it to post3");
        if(songExist) return res.status(400).send('Email already exist');
        console.log("made it to post3");


    //Create new song    
       let s = new Song({
           title: req.body.title,
           artist: req.body.artist,
           album: req.body.album,
           genre: req.body.genre,
           year: req.body.year,
           avgRating: req.body.avgRating,
           numOfReviews: req.body.numOfReviews
           
       })
       console.log("made it to post3");
       try{
            s.save();
            res.send(s);  
            console.log("made it to post3");     
       }catch(err){
        console.log("made it to post3");
           res.status(400).send(err);
       }       
});


module.exports = router