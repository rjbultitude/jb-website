/**
    * Main app & config for require.js
    *
    * $author       Richard Bultitude
    * $email        richard.bultitude@gmail.com
    * $url          http://www.point-b.co.uk
    * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
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
        behaviors: 'behaviors',

        // Modules
        exampleModule: 'modules/example-module',

        //plugins
        tabs: 'plugins/jquery.tabs.plugin'
    }

});

/* -------------------------------------------------------------------------- */
/* ---------- Initialize app ------------------------------------------------ */
/* -------------------------------------------------------------------------- */

require(['jquery', 'base', 'behaviors', 'tabs'], function($, base) {
    'use strict';

    /* ---------- Global modules -------------------------------------------- */
    base.init();

    /* ---------- App modules ----------------------------------------------- */

    /* ---------- Plugins --------------------------------------------------- */
    //initialise jQuery plugin
    $('.tabs').JQueryTabsPlugin();

});