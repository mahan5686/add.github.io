const express = require('express');
const router = express.Router();
const User = require('../models/User')
const mongoose =require('mongoose');
const { find } = require('../models/User');

router.get('/add', (req, res) => {
    // console.log(req.body)
    res.send('Hello harry')
    
    // const user = User(req.body);
    // user.save();
    
    const user=User({"name":"vikas"})
    user.save();
})
 
 router.get('/find',async (req, res) => {
    const data=await User.find()
    console.log(data)
    res.send(data)
})
 router.get('/d',async (req, res) => {
    res.json({
        "userId": 1,
        "id": 1,
        "title": "Mista vikas mahan deepali sona",
        "completed": false
      })
})

module.exports = router
