var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
  logging: false
});

module.exports = db;
