const mongoose = require("mongoose");

//connect with mongoDB
//connect function uses promise
mongoose.connect('mongodb://localhost:27017/my-students')
.then(() => console.log("Connect to MongoDB Successfully!"))
.catch(err => console.err("Connection Failed!"));


//Mongoose Schema(define the shapes documents)
const studentSchema = new mongoose.Schema({
   firstName: {type: String},
   lastName: String,
   dob: Date,
   entryDate: {type: Date, default: Date.now},
   passed: Boolean,
   hobbies: [String],
   parents: {
    father: String,
    mother: String
   },
   subjects: [{name: String, marks: {type: Number, min: 0, max: 100}}]
});