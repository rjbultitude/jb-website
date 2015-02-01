/**
    * Main app & config for require.js
    *
    * $author       Richard Bultitude
    * $email        richard.bultitude@gmail.com
    * $url          http://www.point-b.co.uk
    * $copyright    Copyright (c) 2015, point-b.co.uk. All rights reserved.
    * $version      1.0
    *
    * $notes        Notes
*/


/* -------------------------------------------------------------------------- */
/* ---------- Configure relative paths -------------------------------------- */
/* -------------------------------------------------------------------------- */

require.config({
    paths: {
        //If IE8 support is required switch to jquery 1.11.0
        jquery: 'libs/jquery-1.11.0',
        waypoints: 'libs/waypoints',
        behaviors: 'behaviors',

        //behaviors
        mainNav: 'behaviors/main-nav-behavior',
        surveyChartToggle: 'behaviors/survey-chart',

        // Modules
        waypointsmod: 'modules/waypoints-module',

        //plugins
        tabs: 'plugins/jquery.tabs.plugin'
    }

});

/* -------------------------------------------------------------------------- */
/* ---------- Initialize app ------------------------------------------------ */
/* -------------------------------------------------------------------------- */

require(['jquery', 'base', 'behaviors', 'waypointsmod', 'tabs'], function($, base, behaviors, waypointsmod) {
    'use strict';

    /* ---------- Global modules -------------------------------------------- */
    base.init();
    behaviors.init();

    /* ---------- App modules ----------------------------------------------- */
    waypointsmod.init();

    /* ---------- Plugins --------------------------------------------------- */
    //initialise jQuery plugin
    $('.tabs').JQueryTabsPlugin();

});