
//import the installed module of express 
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// provide name for the server
const server = express();
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
mongoose.connect("mongodb://localhost:27017/");
// mongoose.connect("mongodb+srv://admin:admin123@isad-db.re65v.mongodb.net/");

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.error.bind(console, "Cannot connect to MongoDB."));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas Connection Succcess!"));

//Schema -> blueprint

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})

//Model
const Task = mongoose.model("Task", taskSchema);

// Middewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.get("/home", (req, res) => {
    res.send("Hello from the home endpoint!");
});

server.get("/error", (req, res) => {
    res.status(404).send({
        code: 404,
        message: "Sorry the page cannot be found."
    })
})

server.post("/tasks/add", (req, res) => {

    Task.findOne({name: req.body.name}).then((result) => {
        if(result.name != null && result.name == req.body.name){
            res.send("Duplicate found. This task cannot be added!");
        }else{
            let newTask = new Task({
                name: req.body.name
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error saving the task.");
                }else{
                    res.status(201).send({
                        code: 201,
                        message: "Task is now added!",
                        data: savedTask
                    });
                }
            })
        }
    })

    
})




server.listen(port, () => console.log(`Server is now running at port ${port}.`))