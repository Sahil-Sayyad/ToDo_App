// Adding Express and Router Module Dependencies Here. 
const express = require('express');
const router = express.Router();

//Adding Controller Here
const homeController = require('../controllers/home');

//Route Handler 
router.get('/', homeController.home);
router.use('/createTask', require('./createTasks'));
router.use('/deleteTask', require('./deleteTasks'));

//Exporting router here to available outside this module.
module.exports = router;