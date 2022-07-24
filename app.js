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
   subjects: [{name: String, marks: {type: Number, min: 0, max: 100}}],
   example: {
    a: String,
    type: {type: String}
   }
});

//Model(class of schema)
//Creating Mongoose Model And Saving Document

const Student = mongoose.model("Student", studentSchema); //class

//C=create
//handle using async await
async function createStudent(){
const student = new Student({
    firstName: "Ashis",
    lastName: "Mandal",
    dob: new Date("25 June 2022"),
    passed: true,
    hobbies: ["Singing", "Coding"],
    parents: {
        father: "A",
        mother: "B"
       },
    subjects: [{name: "Math", marks: 85}, {name: "Eng", marks: 80}]
})
 try{
    const data = await student.save();
    console.log(data);
 } catch(err){
    console.log(err._message);
 }
}

//createStudent();

//R=read
async function readStudents(){
    const studentsData = await Student.find();
    //const studentsData = await Student.find({firstName: "Pranay"});
    //const studentsData = await Student.find().limit(2);
    //const studentsData = await Student.find().sort({firstName: -1});
    //const studentsData = await Student.find().select({firstName: 1, lastName: 1, hobbies: 1});
    console.log(studentsData);
}

readStudents();