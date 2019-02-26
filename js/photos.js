function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;
		case 27:
		 window.location.replace("../image.html");
		 break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
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