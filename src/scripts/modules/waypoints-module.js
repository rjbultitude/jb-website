define(['jquery', 'waypoints'], function($) {
	'use strict';

	var waypointsmod = {

		mainNav: $('.nav-main'),

		mq: window.matchMedia('all and (max-width : 500px)'),

		waypointsNavEnable: function waypointsNavEnablefn() {
			$('.article-intro').waypoint(function() {
				waypointsmod.mainNav.toggleClass('fixed');
	    	});
		},

		waypointsNavDisable: function waypointsNavDisableFn() {
			$('.article-intro').waypoint('disable');
		},

		// manageApp: function manageAppFn() {
		// 	if (waypointsmod.mq.matches) {
		// 		waypointsmod.waypointsNavDisable();
		// 	}
		// 	else {
		// 		waypointsmod.waypointsNavEnable();
		// 	}
		// },

		pageSections: function pageSectionsFn() {
			$('#about').waypoint(function() {
				$('a[href="#about"]').addClass('active').siblings().removeClass('active');
			});
			$('#support').waypoint(function() {
				$('a[href="#support"]').addClass('active').siblings().removeClass('active');
			});
			$('#priorities').waypoint(function() {
				$('a[href="#priorities"]').addClass('active').siblings().removeClass('active');
			});
			$('#news').waypoint(function() {
				$('a[href="#news"]').addClass('active').siblings().removeClass('active');
			});
			$('#why').waypoint(function() {
				$('a[href="#why"]').addClass('active').siblings().removeClass('active');
			});
			$('#connect').waypoint(function() {
				$('a[href="#connect"]').addClass('active').siblings().removeClass('active');
			}, { offset: 300 });
		},

		init: function initFn() {
			//set up
			waypointsmod.pageSections();
			waypointsmod.waypointsNavEnable();
		}
	};

	return waypointsmod;
});