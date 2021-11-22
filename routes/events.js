var express = require('express');
var router = express.Router();

/* GET events page. */
router.get('/', function(req, res, next) {
  res.render('events', { title: 'Events', style: "tables" });
});

router.get('/create', function(req, res, next) {
  res.render('eventform', {title: 'Create New Event', style: "newevent"})
})

router.get('/modify', function(req, res, next) {
  res.render('eventform', {title: 'Modify Event', style: "newevent"})
})

module.exports = router;
