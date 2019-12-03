const router = require('express').Router();
const Song = require('../model/Song');
const songValidation = require('../validation');

//Get all songs
router.get('/getsongs', async (req,res)=>{
      
        res.send(Song.find());
});

//Get all songs
router.put('/putsongs', async (req,res)=>{
        //Validate    
        console.log("made it to post3");
        const {error} = songValidation(req.body);
        if(error != null) {
            return res.status(400).send(error.details[0].message);
        }
    
        //Checking if the song is already in the database
        const songExist = await Song.findOne({email: req.body.email});
        
        if(songExist) return res.status(400).send('Email already exist');
        console.log("made it to post3");


    //Create new song    
       let s = new Song({
           title: req.body.title,
           artist: req.body.artist,
           album: req.body.album,
           genre: req.body.genre,
           year: req.body.year,
           numOfReviews: req.body.numOfReviews
           
       })
   
       try{
            s.save();
            res.send(s);          
       }catch(err){
           res.status(400).send(err);
       }       
});


module.exports = router;