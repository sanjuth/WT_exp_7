var express = require("express");
const Student = require("./student.js");
var app = express();
const html = require("ejs");
const path = require("path");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://v_keerthana:9014358001@cluster0.njtd8d8.mongodb.net/?retryWrites=true&w=majority",
  function (error) {
    if (error) console.log(error);
    console.log("connection successful");
  }
);
app.get("/search", (req, res) => {
  student = [];
  res.render("search", { stuData: student, view: false });
}
);
app.post("/student/fetch",(req, res) => {
    Student.find({ id: req.body.rollno }, (error, student) => {
      if (error) {
        console.log(student);
        res.render("search", { stuData: student });
      } else {
        console.log(student);
        res.render("search", { stuData: student, view: true });
      }
    });
  }
);
app.listen(3000, () => console.log("App listening on port 3000!"));