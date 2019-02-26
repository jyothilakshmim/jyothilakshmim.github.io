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
var intervalForward;
var intervalRewind;

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

function keyFunction(e) {
	switch(e) {
		case "OK":
			
			
			clearInterval(intervalForward);
			clearInterval(intervalRewind);
			document.getElementById("myvideo").play();
			
		//	document.getElementById("myaudio").play();
			
			break;
		case "BACK":
			
			document.getElementById("myvideo").pause();
		//	document.getElementById("myaudio").pause();
			break;
			//case "UP":
			//document.getElementById("myvideo").width=1140;
			//document.getElementById("myvideo").height=640;
			//break;
		case "RIGHT":
		 intervalForward = setInterval(function(){
                 if (document.getElementById("myvideo").currentTime == document.getElementById("myvideo").duration) { 
                 clearInterval(intervalForward);
                document.getElementById("myvideo").pause();
                
                 } else {
                    document.getElementById("myvideo").currentTime += .1;
                 } 
                 }, 30);    
                 break;
		case "LEFT":
		intervalRewind = setInterval(function() {
                        clearInterval(intervalForward);
                        if (document.getElementById("myvideo").currentTime == 0) {
                            clearInterval(intervalRewind);
                            document.getElementById("myvideo").pause();
                         
                        } else {
                            document.getElementById("myvideo").currentTime += -.1;
                        }
                  }, 30);
                 break;
		case "STOP":
                 window.location.replace("../videos.html");
                 
                 break;
                           
		
	}
}

function init() {

	var script2 = document.createElement('script');
	script2.setAttribute('src', '../js/keycodes.js');
	document.body.appendChild(script2);

	document.addEventListener("keydown", function(e) {
		if (handleKeyCode(e.keyCode))
			e.preventDefault();
	}, false);

	//set appMngr to the application/oipfApplicationManager object
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