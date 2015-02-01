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
        var context = $(context);
        var btn = context;
        var figure = $('#figure-survey-chart');
        var table = $('#table-survey-chart');

        var toggleSurveyChart = function() {
            btn.on('click', function(e) {
                e.preventDefault();
                if (figure.is(':visible')) {
                    figure.hide();
                    table.show();
                    btn.text('View data as image');
                } else {
                    figure.show();
                    table.hide();
                    btn.text('View data as table');
                }
            });
        };

        this.init = function() {
            toggleSurveyChart();
        };

    };

    return behavior;
});