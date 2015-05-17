var React = require('react');
var Router = require('react-router');

var UserStore = {
	_user       : [],
	getUsers    : function(){
		return this._user;
	}
};

var App = React.createClass({
	getInitialState: function(){
		return {users: this.props.users || UserStore.getUsers()}
	},
	render: function () {
		debugger
		return (
			<div>{this.state.users}</div>
		);
	}
});

module.exports = App;

