/**
 * Example module module
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.point-b.co.uk
 * $copyright    Copyright (c) 2014, thisiszone.com. All rights reserved.
 * $version      1.3
 *
 * $notes        Notes
 */

var requireLocalized = requireLocalized || {};

define(function() {
	'use strict';

	//private variable
	var _privateVar = 'private variable';

	//private method
	var _privateMethod = function () {
		var message = 'I am a private function and I use a ' + _privateVar;
		
	};

	var module = {

		//public members(use this)
		publicVar: 'I am public var',

		//privileged method
		//can access private & public variables
		privilegedMethod: function privilegedMethodFn() {
			
		},

		init: function initModule() {
			module.privilegedMethod();
		}

	};

	//Call private method
	_privateMethod();

	return module;

});