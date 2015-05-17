var React = require('react');
var Router = require('react-router');

var UserStore = {
	_user       : [],
	getUsers    : function(){
		return this._user;
	}
};

var App = React.createClass({displayName: "App",
	getInitialState: function(){
		return {users: this.props.users || UserStore.getUsers()}
	},
	render: function () {
		debugger
		return (
			React.createElement("div", null, this.state.users)
		);
	}
});

module.exports = App;

