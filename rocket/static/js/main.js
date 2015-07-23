/**
 * Serves as mainly a configuration file.
 * Main JS logic found in each app's JS files.
 **/

require.config({
	baseURL:'/static/js/',
	paths: {
		'jquery': 'lib/jquery-2.1.4.min',
		'bootstrap': 'lib/bootstrap.min',
		'bb': 'lib/backbone-min',
		'underscore': 'lib/underscore-min',
		'text': 'lib/text'
	}
});

require(['bootstrap']);
