//import all required packages
const express = require("express");
const router = express.Router();

const taskController = require("../controller/taskController");

router.get("/", taskController.read);
router.post("/create", taskController.create);
router.get("/edit/:id", taskController.edit);
router.post("/update/:id", taskController.update);
router.get("/delete/:id", taskController.delete);

module.exports = router;
