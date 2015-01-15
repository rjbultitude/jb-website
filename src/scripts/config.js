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
        examplePlugin: 'plugins/example-plugin',
        exampleJqueryPlugin: 'plugins/example-jquery-plugin',

        // Behaviors
        exampleBehavior: 'behaviors/example-behavior',
        exampleBehaviorAJAX: 'behaviors/example-behavior-ajax'
    }

});

/* -------------------------------------------------------------------------- */
/* ---------- Initialize app ------------------------------------------------ */
/* -------------------------------------------------------------------------- */

require(['jquery', 'base', 'behaviors', 'examplePlugin', 'exampleJqueryPlugin'], function($, base, behaviors, MyPlugin) {
    'use strict';

    /* ---------- Global modules -------------------------------------------- */
    base.init();

    /* ---------- App modules ----------------------------------------------- */
    behaviors.init();

    //example of lazy loaded script module
    if ($('body').hasClass('homepage')) {
        require(['exampleModule'], function(module) {
            module.init();
        });
    }

    /* ---------- Plugins --------------------------------------------------- */
    //initialise jQuery plugin
    $('.my-jquery-selector').myJQueryPlugin({optionOne: 'I am the output of a typical jQuery plugin'});
    
    //Create new instance of JS vanilla plugin
    var exampleInstance = new MyPlugin.MyPlugin('.my-selector');
    //use new methods and properties
    exampleInstance.aMethod('something');
    exampleInstance.anotherMethod();
    console.log('exampleInstance', exampleInstance);
    


    /* ---------- Utilities ------------------------------------------------- */
    if (!base.ltIe9) {
        //load something that is for IE9 or greater
        
    } else {
        
    }
});