//global $,jQuery,alret
$(document).ready(function (){
	    // Nice Scroll 
    $("html").niceScroll({
        cursorcolor:"#E41B17",
        cursorwidth:"15px",
        background:"rgba(20,20,20,0.2)",
        cursorborder:"1px solid #E41B17",
        cursorborderradius:0
      });
      $("#boxscroll").niceScroll({horizrailenabled:false});
	  // End Nice Scroll
	
    $('.carousel').carousel({
        interval:6000
    });
	//  Cashing the Scrol Top Element

    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Botton To Scroll Top 
    scrollButton.click(function () {
        $("html ,body").animate({ scrollTop: 0 }, 600);

    });
    });
// Loading Screen
$(window).load(function (){

	// loading elements
	$('.loading-overlay .spinner').fadeOut(2000,function (){
			//show scroll
	$('body').css('overflow','auto')
		$(this).parent().fadeOut(2000,function (){

			$(this).remove();
		})
	})
})