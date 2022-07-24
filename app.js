const mongoose = require("mongoose");

//connect with mongoDB
//connect function uses promise
mongoose.connect('mongodb://localhost:27017/my-students')
.then(() => console.log("Connect to MongoDB Successfully!"))
.catch(err => console.err("Connection Failed!"));