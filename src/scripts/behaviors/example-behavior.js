


/*  NOTE:
*   Make sure you name your behavior atribute with camelCase 
*   exactly as you have named the path within the config file
*   If your file is named example-behavior.js, 
*   your data attribute should be data-behavior="exampleBehavior", 
*   and the path should be named exampleBehavior within the config file
*/


define(['jquery'], function($) {
    'use strict';

    var behavior = function behavior(context) {
        var $context = $(context);

        var doSomething = function() {
            $context.on('click', function() {
                $context.after('<div><strong>You added me</strong></div>');
            });
        };

        this.init = function() {
            doSomething();
        };

    };

    return behavior;
});