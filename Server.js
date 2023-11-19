const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const dotenv=require("dotenv")
dotenv.config();



let app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${Date.now()}_ ${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

let connectToDB = async () => {
  try {
    await mongoose.connect(process.env.dbPath);
    console.log("connected successfully");
  } catch (error) {
    console.log("something went wrong");
  }
};

let UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

})
let User = new mongoose.model("user", UserSchema)


app.post("/validateLogin", upload.none(), async (req, res) => {
  console.log(req.body)

  let userDetails = await User.find().and({ email: req.body.email });
  if (userDetails.length == 0) {
    res.json({ status: "failure", msg: "user doesnot exit" });
  } else {
    if (userDetails[0].password == req.body.password) {
      res.json({ status: "success", msg: "valid credential", data: userDetails[0] });
    } else {
      res.json({ status: "failure", msg: "inncorrect password" });
    }
  }
});

app.post("/signup", upload.none(), async (req, res) => {
  console.log(req.body)
  console.log("we have received the request from client");

  let userDetails = await User.find().and({ email: req.body.email })
  if (userDetails.length > 0) {
    res.json({ status: "failure", msg: "user already exists" })
  } else {
    try {
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

      })
      User.insertMany([newUser])
      res.json({ status: "success", msg: "userCreatedSuCCessFuLLy" });
    } catch (err) {
      res.json({ status: "failure", msg: "userNotCreatedSuCCessFuLLy" });
    }
  }
})

app.listen(process.env.port,() => {
  console.log("listenning port1234")
})
connectToDB();