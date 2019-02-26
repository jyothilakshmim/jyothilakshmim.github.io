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

$(document).ready(function()
{
	// hides all DIVs with the CLASS container
	// and displays the one with the ID 'home' only
	$(".container").css("display","none");
	$("#home").css("display","block");
	
	// makes the navigation work after all containers have bee hidden 
	showViaLink($("ul#navigation li a"));
	
	var menuPosition = 1;
	// listens for any navigation keypress activity
	$(document).keydown(function(e)
	{
		
		switch(e.which)
		{
			case 13:
			switch(menuPosition) {
				case 1:
					 showViaKeypress("#home");
					break;
				case 2:
					location.replace("index1.html")
					break;
				case 3:
					showViaKeypress("#contact");
					break;
				case 4:
					showViaKeypress("#awards");
					break;
				case 5:
					showViaKeypress("#links");
					break;
					
	
				
				
			}
			break;
			
			case 40:
			if (menuPosition < 5 && menuPosition > 0) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition++;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
				
			}
			break;
			case 38 :
			if (menuPosition > 1 && menuPosition < 6 ) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition--;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
			}
			break;
			case 415 :
			
				clearInterval(intervalForward);
			clearInterval(intervalRewind);
			document.getElementById("myvideo").play();
			
			break;
			case 19:
			document.getElementById("myvideo").pause();
			break;
			case 473:
			 intervalForward = setInterval(function(){
                 if (document.getElementById("myvideo").currentTime == document.getElementById("myvideo").duration) { 
                 clearInterval(intervalForward);
                document.getElementById("myvideo").pause();
                
                 } else {
                    document.getElementById("myvideo").currentTime += .1;
                 } 
                 }, 30);    
                 break;
			case 412:
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
			case 27:
			clearInterval(intervalForward);
                 clearInterval(intervalRewind);
                 document.getElementById("myvideo").pause();
                 document.getElementById("myvideo").currentTime = 0;
				 break;
			case 39:
			
			var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
	
	
			break;
			case 37 :
			 var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
	 
			break;
		}
	});
});

// shows a given element and hides all others
function showViaKeypress(element_id)
{
	$(".container").css("display","none");
	// if multiple keys are pressed rapidly this will hide all but the last pressed key's div
	$(".container").hide(1);
	$(element_id).slideDown("slow");
}

// shows proper DIV depending on link 'href'
function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			var target = $(this).attr("href");
			$(".container").css("display","none");
			$(target).slideDown("slow");
		});
	});
}

function init() {

	

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