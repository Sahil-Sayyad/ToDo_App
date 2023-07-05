//import all required packages 
const mongoose = require('mongoose');

const mongoDBurl = "mongodb+srv://<yourusrname>:<yourpassword>@todoapp.bx2zyst.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDBurl)
.then(()=> console.log("MongoDb conneted successfuly"))
.catch((err)=>console.log("Error occured in connecting to mongodb ", err));
