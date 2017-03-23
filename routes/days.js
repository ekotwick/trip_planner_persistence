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
    Day.create({
        day: req.body.day
    })
    res.send(req.body.day);
})

router.put('/:id/hotels', function(req,res,next) {
    // Day.update(req.body, {
    //     where: {day: req.params.id},
    //     returning: true
    // })
    // .then(function([numUpdated, firstUpdatedInstance]){
    //     res.json({
    //         message: 'Updated successfully',
    //         numAffectedRows: numUpdated,
    //         affectedRow: firstUpdatedInstance
    //     })
    // })
    // .catch(next);

    Day.findOne({
        where: {
            day: req.params.id
        }
    })
    .then((day)=>{
        day.setHotel(1)
    })
    .then(function(setDay){
        res.json(setDay)
    })  
})

router.put('/:id/:restuarants', function(req,res,next) {
    Day.findOne({
        where: {
            day: req.params.id
        }
    })
    .then(function(day){
        day.update()
    })  
})

router.put('/:id/:activities', function(req,res,next) {
    Day.findOne({
        where: {
            day: req.params.id
        }
    })
    .then(function(day){
        day.update
    })  
})

router.delete('/:id', function(req,res,next) {
    
})

module.exports = router;
