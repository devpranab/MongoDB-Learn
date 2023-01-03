# MongoDB-Learn
MongoDB Database

Frontend - express - database

1. Installing Mongodb (Windows)
- https://www.mongodb.com/try/download/community
- Download MongoDB softwere & install.
- MongoDB is database which store json data.
- Express(api system) works as middleman with client-side & database.

2. Running Mongodb Server
- Open Terminal
- cd "C:\Program Files\MongoDB\Server\5.0\bin"
- dir //what file have show
- mongod.exe (not found this cd)
- mongod.exe (again run server)
- Edit the system Environment variables - C:\Program Files\MongoDB\Server\4.2\bin

3. Crud Operations (Create)
_Command Prompt - mongo.exe
- > use my-test (create)
- > db.students.insertOne({name: "Pranav Sarkar", age: 18, hobbies: ["A","B"]}) (data insert, n here students is collection)
- > db.students.find()
- > db.students.insertMany([{},{},{}])
- > db.students.find()
- > show dbs
- > use my-test (switch on my-test database)

4. Crud Operations (Read)
- > db.students.find().pretty()
- > db.students.find({name: "Pranav"})
- > db.students.find({name: "Pranav"}).pretty()
- > db.students.find().limit(2)
- > db.students.find({age: 20})
- > db.students.find({age: {$lte: 20}})
- > db.students.find({age: {$lt: 20}})
- > db.students.find({age: {$gt: 20}})
- > db.students.find({name: "pranav sarkar", age:20}) //search multi field
- > db.students.find({$or: [{name: "pranav"}, {age: 22}]}) //or condition

5. Crud Operations (Update And Delete)
- > db.students.updateOne({name: "pranav"}, {$set: {age: 23}})
- > db.students.updateMany({name: "pranav"}, {$set: {age: 23}})
- > db.students.deleteOne({age: 22})
- > db.students.deleteMany()
- > db.students.find().pretty()
- docs/mongodb.com/manual/crud/ for more

docs/mongodb.com/manual/crud/ for more

6. Mongodb Compass
- we used cmd & mongodb shell 
now we will use compass softwere for crud operation
download compass softwere from mongodb.com
#connect with mongodb soft with compass soft.
open compass>Fill in connection fields individually(uto fill up)>connect>show database & have crud option.
- Download - https://www.mongodb.com/docs/compass/current/install/

---------------------------------------------------------------------------------------
https://mongoosejs.com/docs/guide.html
### Working with Mongoose
1. Connecting To Mongodb
2. Mongoose Schema
3. Schema Types
4. Creating Model And Saving Document
5. Querying Documents
6. Updating And Deleting Documents
7. Built-In Validators
8. Custom Validators
9. Error Messages
