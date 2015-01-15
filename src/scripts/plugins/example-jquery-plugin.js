/**
 * Jquery Plugin: $myName 1.00
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.point-b.co.uk
 * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
 * $version      1.0
 *
 * $notes        Notes
 */


define(['jquery'], function($){
    'use strict';

    (function ($) {

        $.fn.myJQueryPlugin = function (options) {

            //Settings
            var settings = $.extend({
                optionOne       : null
            }, options);

            return this.each(function () {

                var $wrapper = $(this);


                function firstFunction () {
                    //my first function
                    $wrapper.text(settings.optionOne);
                    
                }

                //Init functions
                firstFunction();

            });
            //end each
        };
        //end jquery extend

    })(jQuery);


}); //end define