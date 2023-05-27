//Adding Schema of to-do-list here .
const Task = require('../models/tasks.js');

//Sending Response to Browser.
module.exports.create_task = (req, res)=>{
 
    // Access form data 
    const tasks = {
        description:req.body.description,
        dueDate:req.body.dueDate,
        Category:req.body.Category,
    }

    //Process the data..
    Task.create(tasks)
    .then(createTasks =>{
        
        return res.redirect('back');
    }).catch(err =>{
        console.log(err);
    });
}