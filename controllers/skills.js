const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new:newSkill,
  create,
  delete:deleteSkill
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.tuna);
  res.redirect('/skills')
}
function create(req, res) {
 Skill.create(req.body);
 //Always do redirect when data has to been changed
 res.redirect('/skills');
}

function newSkill(req,res) {
  res.render('skills/new', {title:'New Skill'});
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skill Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All Skills Details'

  });
}
