//Validation
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = data=> {
    const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    
    });
    return schema.validate(data);
};

//Login Validation
const loginValidation = data=> {
    const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    
    });
    return schema.validate(data);
};

const songValidation = data=> {
    const schema = Joi.object({
    title: Joi.string().required(),
    artist: Joi.string(),
    album: Joi.string(),
    genre: Joi.string(),
    year: Joi.number(),  
    recentReview: Joi.string(),
    avgRating: Joi.number().required(),  
    numOfReviews: Joi.number().required() 
    });
    return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.songValidation = songValidation;