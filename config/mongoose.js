//Adding Mongoose Module Dependencies 
const mongoose = require('mongoose');

//Catching Error Here.
main().catch(err=> console.log("Connection Error", err));

//Conneting To Database .
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/to_do_list');
    console.log("Conneted To MongoDB");
}