
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const main = require('./config/database')
dotenv.config({ path: './config/.env' })   
const PORT = process.env.PORT

//connecting to database && starting express server
main()
  .then(() => app.listen(PORT, function(){
    console.log(`server up and listening on ${PORT}`);
}))
  .catch(console.error)

// 3. Initialize the application 
var app = express();

// Load config

app.use(express.urlencoded({ extended: false }));

app.use(cors());

//intitializing body parser
app.use(express.json())







// Routes
app.use('/login', require('./routes/signIn'))
app.use('/register', require('./routes/signUp'))





