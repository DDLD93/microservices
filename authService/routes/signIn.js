const express = require('express')
const router = express.Router()
const User = require('../models/userSchema')


router.get('/', async (req, res) => {
  
      const user = new User({
        displayName:'ujere'
      })
      user.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    }); 
    //  res.send({message:'login routes'})
  })
  
  module.exports = router 