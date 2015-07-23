/**
 * Main app logic for "main". Renamed to landing_page to
 * prevent confusion with requireJs's main.js.
 **/
 define([
 	'/static/main/js/appViews.js'
 	], 
 	function(appViews) {
 		//Wait until page load
 		$(function() {
 			console.log('Rendering landing page...');
 			appViews.renderLandingPage();
 		});
 	return {

 	};

 });