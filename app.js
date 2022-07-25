const mongoose = require("mongoose");

//connect with mongoDB
//connect function uses promise
mongoose.connect('mongodb://localhost:27017/my-students')
.then(() => console.log("Connect to MongoDB Successfully!"))
.catch(err => console.err("Connection Failed!"));


//Mongoose Schema(define the shapes documents)
const studentSchema = new mongoose.Schema({
   firstName: {type: String},
   lastName: {type: String, required: [true, "please insert lastname"]},
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
    try{
        const data = await Student.create({ //another way to create
            firstName: "Mnis",
            //lastName: "Mandal",
            dob: new Date("25 June 2022"),
            passed: true,
            hobbies: ["Singing", "Coding"],
            parents: {
                father: "A",
                mother: "B"
               },
            subjects: [{name: "Math", marks: 85}, {name: "Eng", marks: 80}]
        });
    console.log(data);

    }catch(err){
        console.log(err.message);
    }
}

createStudent();

//R=read
async function readStudents(){
    const studentsData = await Student.find();
    //const studentsData = await Student.find({firstName: "Pranay"});
    //const studentsData = await Student.find().limit(2);
    //const studentsData = await Student.find().sort({firstName: -1});
    //const studentsData = await Student.find().select({firstName: 1, lastName: 1, hobbies: 1});
    //const studentsData = await Student.find().countDocuments(); //count show
    console.log(studentsData);
}

readStudents();

//U=update
async function updateStudents(id){
    const student = await Student.updateOne({_id: id},{
    $set: {
        passed: false
    }});
    console.log(student);
}

//updateStudents("62dd5283d26e6539b6e8c204");

//D=delete
async function deleteStudents(id){
    const student = await Student.deleteOne({_id: id});

    console.log(student);
}

deleteStudents("62dd5283d26e6539b6e8c204");


//Follow docs for more built-In validators(mongoosejs.com)