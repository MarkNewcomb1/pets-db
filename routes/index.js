var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select('').from('person').where('name', 'Mark')
  .then(function(data){
    res.json(data);
  })
})

module.exports = router;
