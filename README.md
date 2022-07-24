# MongoDB-Learn
MongoDB Database

Frontend - express - database

01. Intro to MongoDB: - Database - store json database(collection)
1 Installing Mongodb (Windows)
-https://www.mongodb.com/try/download/community
Instll process: install-run-next-complete-run-service-network service user-install

2 Running Mongodb Server:
Open Terminal>cd "C:\Program Files\MongoDB\Server\5.0\bin"
>dir
create folder data_db in c drive
>add path var: env - path - edit - new - add path
>open terminal - mongod.exe - on server (addr & port) - keep server
>open new terminal - mongo.exe -for connect to server

>cls - clear screen

3 Crud Operations (Create):
>use my-test //switch to my-test database(create)
>db.students.insertOne({name: "pranav", age: 21, prof: "programmer"}) //true,objectId
>db.students.find() - show data
>db.students.insertMany([{name: "lutful", age: 25, prof: "designer"}], [{name: "danish", age: 20, prof: "marketer"}])
>show dbs - show all database
-admin(default db)
config(default db)
local(default db)
my-test(our created db)

concepts: students - collection name

4 Crud Operations (Read):
>db.students.find().pretty() - format
>db.students.find({name: "pranav"})
>db.students.find({name: "pranav"}).pretty()
>db.students.find().limit(1)
>db.students.find().limit(2)
>db.students.find({age: {$lte: 25}}) //on condition
>db.students.find({age: {$lt: 25}})
>db.students.find({age: {$gte: 21}})
>db.students.find({$or: [{name: "pran"}, {age: 21}]}) //or condition

5 Crud Operations (Update And Delete) by shell:
>db.students.find().pretty()
>db.students.updateOne({name: "pranav"}, {$set: {age: 20}}) -whom+set
>db.students.updateMany({name: "pranav"}, {$set: {age: 20}})
>db.students.deleteOne({age: 27})
>db.students.deleteMany({age: 27})

docs/mongodb.com/manual/crud/ for more

6 Mongodb Compass:
we used cmd & mongodb shell 
now we will use compass softwere for crud operation
download compass softwere from mongodb.com
#connect with mongodb soft with compass soft.
open compass>Fill in connection fields individually(uto fill up)>connect>show database & have crud option
