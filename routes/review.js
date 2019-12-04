const router = require('express').Router();
const Review = require('../model/Review');
const {reviewValidation} = require('../validation');
const Song = require('../model/Song');

//Add review to database
router.put('/putreview', async (req,res)=>{
    //Validate    
    console.log("made it to post3");
    const {error} = reviewValidation(req.body);
    if(error != null) {
        console.log("made it to post3");
        return res.status(400).send(error.details[0].message);
    }
    console.log("made it to post3");
    
//Create new review    
   let r = new Review({
       name: req.body.name,
       comment: req.body.comment,
       rating: req.body.rating,
       songId: req.body.songId
   })
   
   console.log("made it to post3");
   try{
        r.save();
        res.send(r);  
        console.log("made it to post3");     
   }catch(err){
    console.log("made it to post3");
       res.status(400).send(err);
   }       
});

router.put('/updatesong', async(req,res)=>{
    console.log("no error");
    const s = await Song.findOne({_id: req.body.songId});
    console.log("no error");
    Song.findByIdAndUpdate(req.body.songId,
        {$set:
            {
                avgRating: ((Number(s.avgRating) * Number(s.numOfReviews) + Number(req.body.rating))/ (Number(s.numOfReviews)+1)),
                numOfReviews: Number(s.numOfReviews)+1,
                recentReview: req.body.comment
            }
        },
        function(err){
            if(err){
                return res.send(err);
            }
            
            res.send({message:"Updated Song"});
        }
        
        );

});

router.get('/getreview', function(req,res){
    Review.find(function(err, s){
        if (err) return res.send(err);
        if(s.songId = req.body._id){
            res.json(s);
        }
        
    });

});


module.exports = router