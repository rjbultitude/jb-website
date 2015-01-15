/**
	* Example plugin
	*
	* $author       Richard Bultitude
	* $email        richard.bultitude@gmail.com
	* $url          http://www.point-b.co.uk
	* $copyright    Copyright (c) 2015, point-b.co.uk. All rights reserved.
	* $version      1.0
	*
	* $notes        Notes
*/

define(function(){
    'use strict';

    var MyPlugin = function MyPlugin(selector){
	    //Constructor
	    this._el = document.querySelector(selector);
	};

	//Add a new property and method to our plugin
	MyPlugin.prototype.anotherProperty = 'I am a property of the example JS plugin';
	MyPlugin.prototype.aMethod = function aMethod(testArgument) {
		var _self = this;
		_self.testArgument = true;
		return _self;
	};
	MyPlugin.prototype.anotherMethod = function anotherMethod() {

	};

	return {MyPlugin:MyPlugin, otherProperties:MyPlugin.prototype};

}); //end define