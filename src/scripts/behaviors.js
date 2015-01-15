// Notes

/* 
*   Make sure you name your behavior atribute with camelCase 
*   exactly as you have named the path within the config file
*   If your file is named example-behavior.js, 
*   your data attribute should be data-behavior="exampleBehavior", 
*   and the path should be named exampleBehavior within the config file
*/


define(['jquery'], function($) {
    'use strict';

    function loadBehaviors(context) {
        if (context === undefined) {
            context = window.document;
        }

        $(context).find('[data-behavior]').each(function() {
            var _this = this;
            var behaviors = _this.getAttribute('data-behavior');
            // console.log(behaviors);
            $.each(behaviors.split(' '), function(index, behaviorName) {
                try {
                    require([behaviorName], function(BehaviorName) {
                        var behaviorInstance = new BehaviorName(_this);
                        behaviorInstance.init();
                    });
                } catch(e) {
                    // No Operation
                }
            });
        });
    }

    var app = {
        init: function initBehaviors(context) {
            loadBehaviors(context);
        }
    };

    return app;
});