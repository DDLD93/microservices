
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const db = require('./config/database').db
dotenv.config({ path: './config/.env' })   
const PORT = process.env.PORT

// Initialize the express  application 
var app = express();
//Bind database connection to error event (to get notification of connection errors)
db.then(() =>{
  console.log('database connected');
  app.listen(PORT, () =>{
    console.log(`server up and listening on ${PORT}`)})
})
// Load config

app.use(express.urlencoded({ extended: false }));
app.use(cors());
//intitializing body parser
app.use(express.json())

// Routes
app.use('/login', require('./routes/signIn'))
app.use('/register', require('./routes/signUp'))




  
