var express = require('express');
var router = express.Router();

const events_data = require('../data/dummy_events_v2')

/* GET events page. */
router.get('/', function(req, res, next) {
  res.render('events', { title: 'Events', style: "tables", events : events_data});
});

router.get('/create', function(req, res, next) {
  res.render('eventform', {title: 'Create New Event', style: "newevent"})
})

router.get('/modify/:event_id', function(req, res, next) {
  let event_id = req.params.event_id;
  // let event;
  // for(int i = 0; i < events_data.length; i++) {
  //   if (events_data[i].event_id === event_id)
  //     event = events_data[i];
  // }
  //alternatively
  let event = events_data.find(function(evt){ return evt.event_id == event_id});
  if (event === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('eventform', { title: 'Modify Event', style: "newevent", event: event});
  }

})

router.get('/:event_id', function(req, res, next) {
  let event_id = req.params.event_id;
  // let event;
  // for(int i = 0; i < events_data.length; i++) {
  //   if (events_data[i].event_id === event_id)
  //     event = events_data[i];
  // }
  //alternatively
  let event = events_data.find(function(evt){ return evt.event_id == event_id});
  if (event === undefined ){
    next(); //pass along, send 404
  }
  else {
    res.render('event', { title: event.event_name, style: "tables", event: event});
  }
});

module.exports = router;
