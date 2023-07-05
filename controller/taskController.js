//import all required packages
const Task = require("../model/task");
module.exports.read = async (req, res) => {
  try {
    const data = await Task.find({});
    return res.render("task", {
      title: "To Do List | App",
      data: data,
    });
  } catch (err) {
    console.log("error in read controller", err);
  }
};

//add data to db
module.exports.create = async (req, res) => {
  try {
    const { description, catagory, duedate } = req.body;
    console.log("des", description);
    console.log("deu", duedate);
    await Task.create({ description, catagory, duedate });
    console.log("record created successfully");
    return res.redirect("back");
  } catch (err) {
    console.log("Error in create controller ", err);
  }
};

//edit data to db
module.exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    let data = await Task.find({});
    return res.render("update", {
      title: "Update Task",
      data: data,
      id: id,
    });
  } catch (err) {
    console.log("Error in edit controller", err);
  }
};

//update data to db
module.exports.update = async (req, res) => {
  try {
    let id = req.params.id;
    const { description, catagory, duedate } = req.body;

    await Task.findByIdAndUpdate(
      id,
      { description, catagory, duedate },
      { new: true }
    );
    console.log("record update successfully");
    return res.redirect("/");
  } catch (err) {
    console.log("Error in update controller", err);
  }
};

//delete data to db
module.exports.delete = async (req, res) => {
  try {
    let id = req.params.id;
    await Task.findByIdAndDelete(id);
    console.log("record deleted successfully");
    return res.redirect("/");
  } catch (err) {
    console.log("error in delete controller", err);
  }
};
