/*

Copyright © 2016-2018 NGINE NETWORKS SARL

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

var int_objs = new Array();
var int_objTypes = {
	appMan : "oipfApplicationManager",
	config : "oipfConfiguration"
};
var int_app = null;
var int_keyset = null;
var int_ksVisible = null;
var VK_BACK = 8;
var VK_ENTER = 13;

var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;

var VK_RED = 403;
var VK_GREEN = 404;
var VK_YELLOW = 405;
var VK_BLUE = 406;

var VK_PLAY = 415;
var VK_STOP = 27;
var VK_PAUSE = 19;
var VK_FAST_FWD = 473;
var VK_REWIND = 412;

var VK_0 = 48;
var VK_1 = 49;
var VK_2 = 50;
var VK_3 = 51;
var VK_4 = 52;
var VK_5 = 53;
var VK_6 = 54;
var VK_7 = 55;
var VK_8 = 56;
var VK_9 = 57;

var keycodesReady=true;
function handleKeyCode(kc) {
	switch(kc) {
		case VK_UP:
			keyFunction("UP");
			return true;
			break;
		case VK_DOWN:
			keyFunction("DOWN");
			return true;
			break;
		case VK_LEFT:
			keyFunction("LEFT");
			return true;
			break;
		case VK_RIGHT:
			keyFunction("RIGHT");
			return true;
			break;
		case VK_ENTER:
			keyFunction("OK");
			return true;
			break;
		case VK_RED:
			keyFunction("RED");
			return true;
			break;
		case VK_YELLOW:
			keyFunction("YELLOW");
			return true;
			break;
		case VK_GREEN:
			keyFunction("GREEN");
			return true;
			break;
		case VK_BLUE:
			keyFunction("BLUE");
			return true;
			break;
		case VK_PLAY:
			keyFunction("PLAY");
			return true;
			break;
		case VK_PAUSE:
			keyFunction("PAUSE");
			return true;
			break;
		case VK_STOP:
			keyFunction("STOP");
			return true;
			break;
		case VK_BACK:
			keyFunction("BACK");
			return true;
			break;
		case VK_FAST_FWD:
			keyFunction("FAST_FWD");
			return true;
			break;
		case VK_REWIND:
			keyFunction("REWIND");
			return true;
			break;
		default:
			return false;
	}
}

//KeyCode OK BUTTON
/*var VK_ENTER = 13;

 function eventExec(e) {
 if (e == VK_ENTER) {
 document.getElementById("msg").innerHTML = "<p>TV displaying</p>";
 return true;
 } else {
 return false;
 }
 }*/

var menuPosition = 1;
//start with 1

function keyFunction(e) {
	switch(e) {
		case "OK":
			switch(menuPosition) {
				case 1:
					 window.location.replace("index.html");
					break;
				case 2:
					window.location.replace("image.html");
					break;
				case 3:
					window.location.replace("videos.html");
					break;
				case 4:
					window.location.replace("schedule.html");
					break;
				
				
				
			}
			break;
		case "BACK":
			break;
		case "DOWN":
			if (menuPosition < 4 && menuPosition > 0) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition++;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
				
			}
			break;
		case "UP":
			if (menuPosition > 1 && menuPosition < 5 ) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition--;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
			}
			break;
		
			
	}
}

function init() {

	/*var script2 = document.createElement('script');
	script2.setAttribute('src', 'keycodes.js');
	document.body.appendChild(script2);*/
	//adding listenner to the application
	/*	document.addEventListener("keydown", function(e) {
	 if (eventExec(e.keyCode))
	 e.preventDefault();
	 }, false);*/
	document.addEventListener("keydown", function(e) {
		if (handleKeyCode(e.keyCode))
			e.preventDefault();
	}, false);

	// set appMngr to the application/oipfApplicationManager object
	var appMgr = document.getElementById("oipfID");
	if ( typeof (appMgr.getOwnerApplication) != "undefined") {
		// create the application
		int_app = appMgr.getOwnerApplication(document);
		//setting remote control buttons
		int_keyset = int_app.privateData.keyset;
		int_ksVisible = 0x23F;
		//0x33F color + nav + vcr + numeric + alpha
		int_app.show();
		int_keyset.setValue(int_ksVisible);
	}

}