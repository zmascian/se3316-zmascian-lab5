const router = require('express').Router();
const user = require('../model/user');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


router.post('/register', async (req,res)=>{
    //Validate date
    const {error} = registerValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    
    //Checking if the user is already in the database
    const emailExist = await user.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');
    
//Hash paswword
const salt = await bcrypt.gentSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);


//Create new user    
   const u = new user({
       name: req.body.name,
       email: req.body.email,
       password: hashPassword
   }) 
   try{
       const savedUser = await u.save();
        res.send({user: u._id});           
   }catch(err){
       res.status(400).send(err);
   }
   
});


//Login
router.post('/login', async (req,res)=>{
    //Validate date
    const {error} = loginValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    
    //Checking if the email exist
    const  u = await user.findOne({email: req.body.email});
    if(!u) return res.status(400).send('Email is wrong');
    
    
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, u.password);
    if(!validPass) return res.status(400).send('Password is wrong');
    
    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    
    res.send('Logged in');
    
});

module.exports = router;