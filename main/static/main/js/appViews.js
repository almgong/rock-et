/**
 * Module that handles view logic for landing page
 * 
 **/
define([
	'bb',
	'text']
	, function(Backbone, text) {

var LandingPageView = Backbone.View.extend({
	$el:$('.landing-page-wrapper'),
	render:function() {
		console.log('eyy in views');
	}
});

var landingPage = new LandingPageView();

var renderLandingPage = function() {
	landingPage.render();
};


return {
	renderLandingPage:renderLandingPage
};

}); //end define