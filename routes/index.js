var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

var apiRouter = require('./api');
var daysRouter = require('./days'); 

router.use('/api', apiRouter);
router.use('/days', daysRouter);

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;


// this has to go somewhere AFTER the html has been rendered
  // $.ajax({
  // 	method: 'GET',
  // 	url: '/days'
  // })
  // .then(function(data){
  // 	console.log('ajax requested');
  // 	console.log(data)
  // })