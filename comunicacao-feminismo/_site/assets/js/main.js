$(document).ready(function(){


    // HEADER
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    

    $('.social-icons a').click(function(e) {
      e.preventDefault();
    	var winWidth = 520,
    		winHeight = 320,
        winTop = (screen.height / 2) - (winHeight / 2),
        winLeft = (screen.width / 2) - (winWidth / 2);

      window.open(
    		$(this).attr("href"),
        'sharer',
        'top=' + winTop + ',' +
        'left=' + winLeft + ',' +
        'toolbar=0,status=0,' +
        'width=' + winWidth + ','+
        'height=' + winHeight
      );
    });


    function goToByScroll(id){
      id = id.replace("link-", "");
  		var offset = $("#"+id).offset().top - 60;
      $('html,body').animate({ scrollTop: offset }, 'slow');
  	}

});
