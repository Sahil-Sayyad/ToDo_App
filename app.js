//Adding Express, Path, Mongoose Modele Depedenecies.
const express = require('express');
const path = require('path');
const db = require('./config/mongoose.js');
const port = process.env.port || 8000;
const host = '127.0.0.1';
const app = express();

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: false }));

//Adding Router Handler Here 
app.use('/', require('./routes'));

// Serve Static Files
app.use(express.static(__dirname + '/public'));

// Set the 'view engine' setting to 'ejs'
app.set('view engine', 'ejs');
app.set('views', './views');

// Start The Server
app.listen(port, host, (err)=>{
    if(err){
        console.log(`Server Error ${err} `);
    }
    console.log(`Server Running at http://${host}:${port}`);
})