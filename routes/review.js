const router = require('express').Router();
const Review = require('../model/Review');
const {reviewValidation} = require('../validation');
const Song = require('../model/Song');

//Add review to database
router.put('/putreview', async (req,res)=>{
    //Validate    
    const {error} = reviewValidation(req.body);
    if(error != null) {
        return res.status(400).send(error.details[0].message);
    }
    
//Create new review    
   let r = new Review({
       name: req.body.name,
       comment: req.body.comment,
       rating: req.body.rating,
       songId: req.body.songId
   })
   
   try{
        r.save();
        res.send(r);    
   }catch(err){
       res.status(400).send(err);
   }       
});

router.put('/updatesong', async(req,res)=>{
    console.log("no error");
    const s = await Song.findOne({_id: req.body.songId});
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
    //console.log("no error");
    Review.find(function(err, s){
        if (err) return res.send(err);
        res.json(s);
    });

});


module.exports = router