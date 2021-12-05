const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://mongo:27017/user'
const client = new MongoClient(url,{
  useNewUrlParser: true,
  useUnifiedTopology: false
});

// Database Name//
// const db = 'authMicroService';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to database');

  return 'done.';
}


    

module.exports = main;