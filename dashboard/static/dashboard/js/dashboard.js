define(['/static/dashboard/js/appViews.js'], function(appViews) {


	$(function() {

		$('body').scrollspy({ target: '#dashboard-nav-inner', offset:60});
		appViews.renderDashboard();

		//handle scrollspy hiding underneath fixed navigation
		var shiftWindow = function() { scrollBy(0, -50) };
		if (location.hash) shiftWindow();
		window.addEventListener("hashchange", shiftWindow);

	});

	return {

	};
});