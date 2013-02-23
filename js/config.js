define([], function() {
	var config = {};
	config.apiKey = 'AIzaSyDZ6qts15VX9a3tohjNuyoWTQOVvkXGUko';
	config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
	config.clientId = '294759317443.apps.googleusercontent.com';

	_.templateSettings = {
	  interpolate: /\{\{(.+?)\}\}/g
	};

	return config;
});

