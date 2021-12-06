const express = require('express')
const router = express.Router()
const User = require('../models/userSchema')


router.get('/', (req, res) => {
  try {
    User.create({},(err,result) =>{
      if(err) console.log(err)
      res.send(result)
    })
    
  } catch (error) {
    res.status(400).send(error)
  }
  })
  
  module.exports = router