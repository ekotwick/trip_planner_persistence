const Sequelize = require('sequelize')

const db = require('./_db');

const Day = db.define('day', {
    day: Sequelize.INTEGER
    
})

module.exports = {Day}