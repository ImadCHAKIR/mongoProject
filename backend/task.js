const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 40000;

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:37017/local');
}
main().catch(err => console.log(err));

app.use(cors())

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const TaskSchema = new mongoose.Schema({
  title: String,
  description : String,
  color: String,
  userId:  String,
  createdAt: { type: Date, default: Date.now },
});

const Task  = mongoose.model('Task', TaskSchema);

async function getTasks(req, res) {
    const task = await Task.find({
        userId: req.query.id
    });
    
    return res.json(task);
}

async function addTask(req, res) {
  const task = await Task.findOne({
    title: req.body.title
  })

  const model = new Task({
    title: req.body.title,
    description : req.body.description,
    color: req.body.color,
    userId:  req.body.userId,
  })

  if (task){
    return res.json(0);
  }else{
    model.save()
    return res.json(model.id);
  }
}



app.post('/task', addTask);
app.get('/task', getTasks);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
