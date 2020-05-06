(function($){

    /** Trigger AOS  **/
    AOS.init();

    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;
        //$("body").addClass("scrolling");


        // animated top scrolling
        $('body, html').animate({scrollTop: pos}, 400, function(){
            //$("body").removeClass("scrolling");
        });
    });

    /*** POPUP ****/
    $(document).on('click', '.open-popup', function(e) {// open popup
        $popup = $("#"+ $(this).attr("data-target"));

        $("body").addClass("popup-active");
        $popup.addClass("active");
    });
    $(document).on('click', '.popup', function(e) {// close popup

        popupActiveId = $(".popup.active").attr("id");
        
        if(e.target.id == popupActiveId){//if clicked outside content area
            $("body").removeClass("popup-active");
            $(".popup").removeClass("active");
        }
    });

}(jQuery));
