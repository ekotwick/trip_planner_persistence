const express = require('express')
const router = express.Router()

const Day = require('../models/day').Day

//this is for getting all of the days
router.get('/', function(req,res,next) {
    Day.findAll()
    .then(function(days){
       res.json(days) 
    })
    .catch(next)
})

router.get('/:id', function(req,res,next) {
    Day.findById(req.params.id)
    .then(function(day){
       res.json(day) 
    })
    .catch(next)
})

// Let's get bold!
router.post('/', function(req,res,next) {
    // these show up on the terminal, NOT in the browserp
    console.log('got to the router');
    console.log(req);
    Day.create({
        day: req.body.day
    })
    res.send(req.body.day);
})

router.put('/:id/:attraction', function(req,res,next) {
    
})

router.delete('/:id', function(req,res,next) {
    
})

module.exports = router;
