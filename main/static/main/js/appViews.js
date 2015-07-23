/**
 * Module that handles view logic for landing page.
 * Since Landing page is static, probably don't need
 * any Backbone. This is here as a structural template.
 **/
define([
	'bb',
	'text']
	, function(Backbone, text) {

var LandingPageView = Backbone.View.extend({
	$el:$('.landing-page-wrapper'),
	render:function() {
		console.log('LP rendered.');
	}
});

var landingPage;

var renderLandingPage = function() {
	landingPage = null;
	landingPage = new LandingPageView();
	landingPage.render();
};


return {
	renderLandingPage:renderLandingPage
};

}); //end define