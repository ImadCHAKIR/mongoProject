const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 30000;

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:37017/local');
}
main().catch(err => console.log(err));

app.use(cors())

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const UserSchema = new mongoose.Schema({
  userName: String,
  password : String,
  createdAt: { type: Date, default: Date.now },
});

const User  = mongoose.model('User', UserSchema);

// User credentials
async function authenticateUser(req, res) {
  console.log('Authenticating')
  const user = await User.findOne({ 
    userName: req.body.username, 
    password: req.body.password
  })

  return res.json(user? user.id : 0)
}

async function signup(req, res) {
  const user = await User.findOne({
      userName: req.body.username,
  });

  if (user) {
    return res.json(0);
  }

  model = new User({
      userName: req.body.username,
      password: req.body.password,
  })

  model.save();
  return res.json(model);
}

app.post('/login', authenticateUser);   
app.post('/signup', signup);   

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
