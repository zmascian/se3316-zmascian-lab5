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
    numOfReviews: Joi.number().required(),
    artist: Joi.string(),
    ablum: Joi.string(),
    year: Joi.number(),
    genre: Joi.string()    
    });
    return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;