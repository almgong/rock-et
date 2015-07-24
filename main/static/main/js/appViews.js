/**
 * Module that handles view logic for landing page.
 * Since Landing page is static, probably don't need
 * any Backbone. This is here as a structural template.
 **/
define([
	'bb',
	'text',
	'waypoint']
	, function(Backbone, text, wp) {

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

//waypoints for classy loading/fading in
var off = 450; //tweak depending on the size of each section

var principlesWP = {destroy:function(){}}; //prevents errors if page loads past wp
var feat1WP = {destroy:function(){}};
var feat2WP = {destroy:function(){}};
var endingWP = {destroy:function(){}};


principlesWP = new Waypoint({
  element: $('.principles')[0],
  offset:off, 
  handler: function() {
    $('.principles > div').css('opacity', 1);
    //$('.principles').addClass('animated fadeInUp animated-no-delay-fast');
    principlesWP.destroy(); //remove binding, no longer needed
  }
});

feat1WP = new Waypoint({
  element: $('.features-1')[0],
  offset:off, 
  handler: function() {
    $('.features-1 > div').css('opacity', 1);
    feat1WP.destroy();
  }
});

feat2WP = new Waypoint({
  element: $('.features-2')[0],
  offset:off, 
  handler: function() {
    $('.features-2 > div').css('opacity', 1);
    feat2WP.destroy();
  }
});

endingWP = new Waypoint({
  element: $('.intro-ending')[0],
  offset:off, 
  handler: function() {
    $('.intro-ending > div').css('opacity', 1);
    endingWP.destroy();
  }
});


return {
	renderLandingPage:renderLandingPage
};

}); //end define