const express = require('express');
const app  = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoutes = require('./routes/auth');
const postRoute = require('./routes/posts');
const songRoutes = require('./routes/music');
const reviewRoute = require('./routes/review');
dotenv.config();

//Connect to DB
mongoose.connect('mongodb+srv://zem44:Qwertyui@db-tr85f.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('connect to db'));

//Middlewares
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,auth-token");
    next();
});
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/posts', postRoute);
app.use('/api/review', reviewRoute);

app.listen(3000, () => console.log('Server up and running'));


