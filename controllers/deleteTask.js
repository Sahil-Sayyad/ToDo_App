//Adding Schema of to-do-list here .
const Task = require('../models/tasks.js');

//Sending Response to Browser.
module.exports.delete_task = (req, res)=>{
 
    // Access Task id 
    let id = req.query.id;
    console.log(id); 
    //Process the data..
    Task.findByIdAndRemove(id)
    .then().catch(err=>{
        console.log(err);
    });
    return res.redirect('/');
}