


/*  NOTE:
*   Make sure you name your behavior atribute with camelCase 
*   exactly as you have named the path within the config file
*   If your file is named example-behavior.js, 
*   your data attribute should be data-behavior="exampleBehavior", 
*   and the path should be named exampleBehavior within the config file
*/


define(['jquery', 'behaviors'], function($, behaviors) {
    'use strict';

    var behavior = function behavior(context) {
        var $context = $(context);

        var loadAJAX = function() {
            $.ajax({
                url: "src/scripts/behaviors/behaviorajax.html"
            })
            .done(function( data ) {
                $context.after(data);
                behaviors.init('#ajaxcontent');
            });
        };

        this.init = function() {
            $context.on('click', function() {
                loadAJAX();
            });
        };

    };

    return behavior;
});