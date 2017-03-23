const express = require('express');
const sequelize = require('sequelize');
const Hotels = require('../models/hotel.js');
const Activities = require('../models/activity.js');
const Restaurants = require('../models/restaurant.js');

const router = express.Router();

module.exports = router;

router.get('/options/hotels', function(req, res, next){
	Hotels.findAll({})
	.then(function(hotels){
		res.json(hotels)
	})
	.catch(next);
})

router.get('/options/restaurants', function(req, res, next){
	Restaurants.findAll({})
	.then(function(restaurants){
		res.json(restaurants)
	})
	.catch(next);
})

router.get('/options/activities', function(req, res, next){
	Activities.findAll({})
	.then(function(activities){
		res.json(activities)
	})
	.catch(next);
})


// $ajax({ method : GET, url: '/api/options' })

// $.get('/api/options/hotels')
// .then(function(hotels){
// 	hotels.forEach(function(hotel){
// 		console.log(hotel.name)});
// });