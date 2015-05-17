var React = require('react');
var Router = require('react-router');
var App = require('./app.js');
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={App}></Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});