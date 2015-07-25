define(['/static/dashboard/js/appViews.js'], function(appViews) {


	$(function() {

		$('body').scrollspy({ target: '#dashboard-nav-inner', offset:60});
		appViews.renderDashboard();

	});

	return {

	};
});