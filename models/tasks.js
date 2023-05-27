//Adding Mongoose Mudule Dependencies
const mongoose = require('mongoose');

//Creating Task Schema with Required Data Types.
const tasks = new mongoose.Schema({
    description:{
     type:String,
     required : true
    },
      
    dueDate:{
        type:String,
        required: true
    },

    Category:{
        type:String, 
        required:true
    }
});

//Exporting models here to available outside this module.
const Task = mongoose.model('Task', tasks );
module.exports = Task;