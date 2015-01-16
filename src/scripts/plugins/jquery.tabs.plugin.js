/**
 * Jquery Plugin: $myName 1.00
 *
 * $author       Richard Bultitude
 * $email        rbultitude@thisiszone.com
 * $url          http://www.thisiszone.com/
 * $copyright    Copyright (c) 2014, thisiszone.com. All rights reserved.
 * $version      1.0
 *
 * $notes        
 */


define(['jquery'], function(){
    'use strict';

    (function ($) {

        $.fn.JQueryTabsPlugin = function (options) {

            return this.each(function () {

                var settings = $.extend({
                    firstActive: true,
                    anchorDisableDefault: true
                }, options);

                var wrapper = $(this);
                var navclass = 'nav-tabs';
                var navclassSelector = '.' + navclass;
                var nav = $(this).find(navclassSelector);
                var close = $('.close', wrapper);
                var contentWrapper = $('.wrapper-tabs-content', wrapper);

                function setInactive () {
                    $('.tab-content', wrapper).addClass('inactive');
                }
                
                function setFirstActive () {
                    $('li:first-child a', nav).trigger('click');
                }

                function getHrefNoHash (thisAnchor) {
                        var thisHref = thisAnchor.attr('href');
                        var thisString = thisHref.replace('#', '');
                        return thisString;
                }

                function tabButtons() {
                    $('a', nav).on('click', function(e){
                        if (settings.anchorDisableDefault) {
                            e.preventDefault();
                        }
                        if (contentWrapper.is(':hidden')) {
                            contentWrapper.show();
                        }
                        //Get href of this link
                        //and remove the hash
                        var thisLink = $(this);
                        var thisParent = $(this).parent('li');
                        var thisString = getHrefNoHash(thisLink);
                        var thisID = $('[id="' + thisString + '"]');
                        var thisContent = wrapper.find(thisID);

                        //active this list item
                        //and deactivate others
                        thisParent.addClass('active');
                        thisParent.siblings().removeClass('active');
                        //activate relevant content div
                        //and hide others
                        thisContent.removeClass('inactive').addClass('load');
                        thisContent.siblings().removeClass('active').addClass('inactive');
                        setTimeout(function() {
                            thisContent.removeClass('load').addClass('active');
                        },50);
                    });
                }

                function tabTrigger() {
                    $('.btn-tab-trigger').on('click', function(e){
                        e.preventDefault();
                        var thisLink = $(this);
                        var thisHref = thisLink.attr('href');
                        var thatLink = $(navclassSelector + ' [href="' + thisHref + '"]');
                        thatLink.trigger('click');
                    });
                }

                function pageToTab() {
                    $(document).ready(function() {
                        var hash = window.location.hash;
                        var tabContent = $(hash + '');
                        var tabBtn = $('a[href="' + hash + '"]', nav);
                        var tabListItem = tabBtn.parent('li');
                        //active relevant tab content
                        tabContent.addClass('active');
                        tabContent.siblings().removeClass('active');
                        //active relevant tab anchor
                        tabListItem.addClass('active');
                        tabListItem.siblings().removeClass('active');
                    });
                }

                function closeAnyTab() {
                    close.on('click', function(e) {
                        e.preventDefault();
                        $('.tab-content').each(function() {
                            var thisTab = $(this);
                            if(thisTab.hasClass('active')) {
                                thisTab.removeClass('active').addClass('inactive');
                                $('a', nav).each(function() {
                                    var thisHrefNoHash = getHrefNoHash($(this));
                                    var thisTabId = thisTab.attr('id');
                                    if(thisTabId === thisHrefNoHash) {
                                        $(this).parent().removeClass('active');
                                    }
                                });
                            }
                        });
                        contentWrapper.hide();
                    });
                }

                //Init functions
                setInactive();
                tabButtons();
                tabTrigger();
                pageToTab();
                closeAnyTab();
                if (settings.firstActive === true) {
                    setFirstActive();
                } else {
                    contentWrapper.hide();
                }

            });
            //end each
        };
        //end jquery extend

    })(jQuery);


}); //end define