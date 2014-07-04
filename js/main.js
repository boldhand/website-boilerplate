$(document).ready(function() {
 
	$("#owl-example").owlCarousel();
	///////////////////////////////////////////////////////////
	$('#tab-container').easytabs();
	///////////////////////////////////////////////////////////
	$('.image').magnificPopup({type: 'image'});
	///////////////////////////////////////////////////////////
	$('.item').matchHeight();
	///////////////////////////////////////////////////////////
	//Smooth page scrolling with TweenMax
	var $window = $(window);
	var scrollTime = 1.2;
	var scrollDistance = 170;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
	//END//
	///////////////////////////////////////////////////////////
	//Function to animate leaving a page
	$.fn.leavePage = function() {   
	  this.click(function(event){
	    // Don't go to the next page yet.
	    event.preventDefault();
	    linkLocation = this.href;
	    // Fade out this page first.
	    $('body').fadeOut(500, function(){
	      // Then go to the next page.
	      window.location = linkLocation;
	    });      
	  }); 
	};
	/* Call the leavePage function upon link clicks */
	$('.transition').leavePage();

	//Fade in
	$('body').css('display', 'none');
	$('body').fadeIn(800);
	//END//
	///////////////////////////////////////////////////////////
	$(window).on("load scroll resize", function(){
        $('element').scrollzip({
            showFunction    :   function() {
                                    alert('Element has come into the view.');
                                },//optional
            hideFunction    :   function() {
                                    alert('Element has gone out of the view.');
                                },//optional
            wholeVisible    :     false,//optional (default false)
            showShift       :     100,//optional (default 0)
            hideShift       :     100,//optional (default 0)
        });
    });
    //END//
	///////////////////////////////////////////////////////////
 
});


