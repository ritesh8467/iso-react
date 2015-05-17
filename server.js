var express = require('express');
var app = express();
var App = require('./app.js');
var path = require('path');
var React = require('react');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.use('/dist/dist.js',function(req,res,next){
	return res.sendFile(__dirname + '/dist/dist.js')
})
app.use('/',function(req,res,next){
	var users = [1,2,3];
	var fac = React.createElement(App, {users: users});
	markup = React.renderToString(fac);
	return res.render('index', {
		markup: markup,
		stateData: JSON.stringify(users)
	});
})

app.listen(3000)