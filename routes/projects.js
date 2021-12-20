var express = require('express');
var router = express.Router();

const projects_data = require('../data/dummy_projects')

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'projects', style: "tables", projects : projects_data});
});

router.get('/create', function(req, res, next) {
  res.render('projectform', {title: 'Create New project', style: "newproject"})
})

router.get('/modify/:project_id', function(req, res, next) {
  let project_id = req.params.project_id;
  // let event;
  // for(int i = 0; i < events_data.length; i++) {
  //   if (events_data[i].event_id === event_id)
  //     event = events_data[i];
  // }
  //alternatively
  let project = projects_data.find(function(evt){ return evt.project_id == project_id});
  if (project === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('projectform', { title: 'Modify Project', style: "newproject", project: project});
  }

})

router.get('/:project_id', function(req, res, next) {
  let project_id = req.params.project_id;
  // let event;
  // for(int i = 0; i < events_data.length; i++) {
  //   if (events_data[i].event_id === event_id)
  //     event = events_data[i];
  // }
  //alternatively
  let project = projects_data.find(function(evt){ return evt.project_id == project_id});
  if (project === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('project', { title: project.project_name, style: "tables", project: project});
  }
});

module.exports = router;
