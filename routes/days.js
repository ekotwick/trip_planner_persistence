const express = require('express')
const router = express.Router()

const Day = require('../models/day').Day

//this is for getting all of the days
router.get('/', function(req,res,next) {
    Day.findAll()
    .then(function(days){
       res.send(days);
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
    Day.create({
        day: req.body.day
    })
    res.send(req.body.day);
})

router.put('/:id/:attraction/:identifier', function(req, res, next){

    Day.findOne({
        where: {
            day: req.params.id
        }
    })
    .then((day) => {
        if (req.params.attraction === 'hotel') {
            day.setHotel(req.params.identifier)
            // returning true 
        } else if (req.params.attraction === 'restaurant') {
            day.addRestaurants(req.params.identifier)
            // returning true
        } else if (req.params.attraction === 'activity') {
            day.addActivities(req.params.identifier)
            // returning true
        } else {
            throw Error ('what the hell did you pick?');
        }
        
    })
    .then(function(val){
        res.json(val)
    })
    .catch(next);

})

router.delete('/:id', function(req,res,next) {
    
})

module.exports = router;
