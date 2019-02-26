
(function($) {
$.fn.paginate = function(data){
var perPage = data.perPage;// number of list items per page
var ulId = data.pageId;// get ul id element
var pager = data.pager;//get pager id element
var currentPageNo = 1;
var leftImgSrc = data.leftImgSrc;
var rightImgSrc = data.rightImgSrc;
var leftImgActiveSrc = data.leftImgActiveSrc;
var rightImgActiveSrc = data.rightImgActiveSrc;
 
var leftPage = $("#"+pager+" a:first img");
var rightPage = $("#"+pager+" a:last-child img");

var totalListItems = $("#"+ulId+" li").length;	
var totalPages = Math.ceil(totalListItems/perPage);

var displayItems = [];

var getCurrentPageNo = function(currentPageNo){
	return currentPageNo;	
};

var defaults = {
    getCurrentPage:getCurrentPageNo //get current page number call back
}
var settings = $.extend(defaults, data);

var currentPage = function(){
	//console.log("currentPageNo="+currentPageNo);
	if(currentPageNo == 1){
		leftPage.attr("src",leftImgSrc);
		rightPage.attr("src",rightImgActiveSrc);
		leftPage.css({'opacity':"0.6",'cursor':"default"});
		rightPage.css({'opacity':"1",'cursor':"pointer"});
		leftPage.attr("data-disabled","true");
		rightPage.attr("data-disabled","false");
	}
	else if(currentPageNo == totalPages){
		leftPage.attr("src",leftImgActiveSrc);
		rightPage.attr("src",rightImgSrc);
		rightPage.css({"opacity":"0.6","cursor":"default"});
		leftPage.css({"opacity":"1","cursor":"pointer"});
		rightPage.attr("data-disabled","true");
		leftPage.attr("data-disabled","false");
	}
	else{
		rightPage.attr("data-disabled","false");
		leftPage.attr("data-disabled","false");
		leftPage.attr("src",leftImgActiveSrc);
		rightPage.attr("src",rightImgActiveSrc);
		rightPage.css({"opacity":"1","cursor":"pointer"});
		leftPage.css({"opacity":"1","cursor":"pointer"});
	}
	if(totalPages==1){
		leftPage.attr("src",leftImgSrc);
		rightPage.attr("src",rightImgSrc);
		leftPage.css({'opacity':"0.6",'cursor':"default"});
		rightPage.css({"opacity":"0.6","cursor":"default"});
	}
};

var Init = function(){
	
	for(var i=1;i<=totalListItems;i++){
		displayItems[i] = $("#"+ulId+" li:nth-child("+i+")");
	}
	
	$("#"+ulId+" li").hide();
	for(var i=1;i<=perPage;i++){
		displayItems[i].addClass("active");
		displayItems[i].show();
	}
	currentPage();
}();


leftPage.on("click",function(event){
	if($(this).attr('data-disabled') === "true") { 
       event.preventDefault();
    }
	else{
	currentPageNo--;
	var indx = $("#"+ulId+" li.active").first().index()+1;
	var len = indx-perPage;
	
	if(len == 1){currentPageNo = 1;}
	if(currentPageNo<1 || currentPageNo>totalPages){ return false;}
	
	$("#"+ulId+" li").hide();
    $("#"+ulId+" li.active").removeClass("active");
	for(var i=indx-1;i>=len;i--){
		if(displayItems[i] != 'undefined' && displayItems[i] !=null ){
		displayItems[i].addClass("active");
		displayItems[i].show();
		}
		else{break;}
	}
   
	currentPage();
	}
settings.getCurrentPage(currentPageNo);
});	
	
	
rightPage.on("click",function(event){
	
	if($(this).attr('data-disabled') === "true") { 
        return false;
    }
	else{
	var indx = $("#"+ulId+" li.active").last().index()+1;
	var len = indx+perPage;
	currentPageNo++;
	if(len == totalListItems){currentPageNo = totalPages;}
	if(currentPageNo>totalPages || currentPageNo<1){ return false;}
	
	$("#"+ulId+" li").hide();
	$("#"+ulId+" li.active").removeClass("active");
	
	for(var i=indx+1;i<=len;i++){
		if(displayItems[i] != 'undefined' && displayItems[i] !=null ){
		displayItems[i].addClass("active");
		displayItems[i].show();
		}
		else{break;}
	}
	
	currentPage();
	}
settings.getCurrentPage(currentPageNo);
});
	
$(document).ready(function()
{var menuPosition=1;
	
	$(document).keydown(function(e)
	{
		
		switch(e.which)
		{
			case 40:
			if (menuPosition < 10 && menuPosition > 0) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition++;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
				
			}
			
			break;
			case 38 :
			if (menuPosition > 1 && menuPosition < 11 ) {
				document.getElementById("menu" + menuPosition).className = "menuimg";
				menuPosition--;
				document.getElementById("menu" + menuPosition).className = "menuimgborder";
			}
			
			break;
			case 27:
		 window.location.replace("../videos.html");
		 break;
			
case 13:
			switch(menuPosition) {
				case 1:
					  window.location.replace("video1.html");
					break;
				case 2:
					 window.location.replace("video2.html");
					break;
				case 3:
					window.location.replace("video3.html");
					break;
				case 4:
					window.location.replace("video4.html");
					break;
				case 5:
					window.location.replace("video5.html");
					break;
				case 6:
					window.location.replace("video6.html");
					break;
				case 7:
					window.location.replace("video7.html");
					break;
				case 8:
					window.location.replace("video8.html");
					break;
				case 9:
					window.location.replace("video9.html");
					break;
				case 10:
				window.location.replace("video10.html");
					break;
				
				
				
			}
			break;
		
			case 37:
			if($(this).attr('data-disabled') === "true") { 
       event.preventDefault();
    }
	else{
	currentPageNo--;
	var indx = $("#"+ulId+" li.active").first().index()+1;
	var len = indx-perPage;
	
	if(len == 1){currentPageNo = 1;}
	if(currentPageNo<1 || currentPageNo>totalPages){ return false;}
	
	$("#"+ulId+" li").hide();
    $("#"+ulId+" li.active").removeClass("active");
	for(var i=indx-1;i>=len;i--){
		if(displayItems[i] != 'undefined' && displayItems[i] !=null ){
		displayItems[i].addClass("active");
		displayItems[i].show();
		}
		else{break;}
	}
   
	currentPage();
	}
settings.getCurrentPage(currentPageNo);
				break;
				
			case 39 :
			
			if($(this).attr('data-disabled') === "true") { 
        return false;
    }
	else{
	var indx = $("#"+ulId+" li.active").last().index()+1;
	var len = indx+perPage;
	currentPageNo++;
	if(len == totalListItems){currentPageNo = totalPages;}
	if(currentPageNo>totalPages || currentPageNo<1){ return false;}
	
	$("#"+ulId+" li").hide();
	$("#"+ulId+" li.active").removeClass("active");
	
	for(var i=indx+1;i<=len;i++){
		if(displayItems[i] != 'undefined' && displayItems[i] !=null ){
		displayItems[i].addClass("active");
		displayItems[i].show();
		}
		else{break;}
	}
	
	currentPage();
	}
settings.getCurrentPage(currentPageNo);
			break;
		}
	});
});
};	
	
}(jQuery));
window.addEventListener("load", function() 
 {

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

})