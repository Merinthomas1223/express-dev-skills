var express = require('express');
var router = express.Router();

/* GET home page. */

//Route for landing page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Skill' });
});

module.exports = router;