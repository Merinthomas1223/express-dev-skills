var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skill. */
router.get('/', skillsCtrl.index);

//get /skills/new <-- this will need to be moved- define before show route

router.get('/new', skillsCtrl.new);

//Get skills/:id
router.get('/:id', skillsCtrl.show);

//POST skills
router.post('/', skillsCtrl.create);

//DELETE /skills/:id
router.delete('/:id',skillsCtrl.delete);

module.exports = router;
