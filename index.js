const express = require('express');
const app  = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoutes = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('connect to db'));

//Middlewares
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoutes);
app.use('./api/user', postRoute);

app.listen(3000, () => console.log('Server up and running'));


