//appviews for dashboard
define([
	'bb', 
	'text',
	'text!/static/dashboard/bb_templates/dashboard.progress.template.html'
	], function(Backbone, txt, progressHTML) {

	var ProgressView = Backbone.View.extend({
		el: $('#progress'),
		render:function() {
			var self = this;
			console.log('rendering Progress - mock ajax call');
			/*$.ajax({
				url:'/dashboard/get_user',
				method:'GET',
				data: {'token':'1234'},
				success:function(data) {
					console.log('success');
					console.log(data)
				},
				error:function() {

				}
			});*/ //uncomment when tastypi implemented, for now, just use mock data in JSON format

			//pretend API call returned success
			var temp = _.template(progressHTML);
			self.$el.html(temp({'data':'yay'}));

		}
	});


	var progress;
	var stats;
	var account;
	var renderDashboard = function() {
		//skeletal function that renders ALL parts of dashboard
		progress = null;
		progress = new ProgressView();
		progress.render();
	};

	return {
		renderDashboard:renderDashboard
	};
});