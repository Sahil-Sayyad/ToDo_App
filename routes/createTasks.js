// Adding Express and Router Module Dependencies Here. 
const express = require('express');
const router = express.Router();

//Adding Controller Here
const taskController = require('../controllers/createTask');

//Route Handler 
router.post('/tasks', taskController.create_task);

//Exporting router here to available outside this module.
module.exports = router;