//Adding Schema of to-do-list here .
const Task = require('../models/tasks.js');

//Pre added task for just demo.
var Tasks = [
    {
        description:"Create a Project ",
        dueDate:"05/04/2023",
        category:"Work"
    }
]

//Sending Response to Browser.
module.exports.home = (req, res)=>{
    const query = Task.find({});
    query.exec()
    .then(tasks =>{
       //Sending index.ejs file to the browser 
       return res.render('index', {
            title : "To Do List App ",
            tasks_List : tasks
        });

    }).catch(err =>{
        console.log(err);
    });
}