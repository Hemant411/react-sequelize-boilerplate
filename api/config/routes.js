var express = require('express');
var router = express.Router();
var models = require('../models');

var User = require('../controllers/user.ctrl');

router.get('/', function(req, res) {
	models.User.findAll().then(users => {
		res.send(users)
	})
})

router.get('/dashboard', function(req, res) {
	res.send('Welcome to dashboard.')
})

router.get('/user', function(req, res) {
	var users = {};
	res.json(users)
})

router.post('/user-login', function(req, res) {
	res.send(200)
})

router.post('/import-csv', User.Index)

router.post('/user-create', function(req, res) {
	console.log(req.body);
	res.send('Welcome to dashboard.')
})

module.exports = router;
