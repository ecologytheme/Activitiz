/* --------------------------------------------
  Site Preloader
-------------------------------------------- */
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})

/* --------------------------------------------
	Parallax, Carosol, Megafolio JS
-------------------------------------------- */
 jQuery(document).ready(function() {

        $('#top').parallax("50%", 0.3);
        $('#events').parallax("50%", 0.2);
 
        $("#activism-sponsor").owlCarousel({
                items : 4,
                lazyLoad : true,
                navigation : true
                });

        var api=jQuery('.gallery-container').megafoliopro({
                layoutarray:[10]
             });
         
        // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
        jQuery('.filter').click(function() {
                jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
                api.megafilter(jQuery(this).data('category'));
                jQuery(this).addClass("selected");
            });
            
        // FANCY BOX ( LIVE BOX)
        jQuery(".fancybox").fancybox();

        // WOW ANIMATION
        new WOW().init();
         
});

/* --------------------------------------------
    Google Map
-------------------------------------------- */
$(function(){
      
       $("#activismmap").gmap3({
          marker:{
            latLng: [51.5286416,-0.1015987],
            options:{
              draggable:true
            },
            events:{
              dragend: function(marker){
                $(this).gmap3({
                  getaddress:{
                    latLng:marker.getPosition(),
                    callback:function(results){
                      var map = $(this).gmap3("get"),
                        infowindow = $(this).gmap3({get:"infowindow"}),
                        content = results && results[1] ? results && results[1].formatted_address : "no address";
                      if (infowindow){
                        infowindow.open(map, marker);
                        infowindow.setContent(content);
                      } else {
                        $(this).gmap3({
                          infowindow:{
                            anchor:marker, 
                            options:{content: content}
                          }
                        });
                      }
                    }
                  }
                });
              }
            }
          },
          map:{
            options:{
              zoom: 10,
              scrollwheel: false
            }
          }
        });
        
});
      
/* --------------------------------------------
    Navigation Scrolling
-------------------------------------------- */

    var $nav = $('.activism-nav');
    var $nav2 = $('.go-to-top');

    $nav.onePageNav();

    $nav2.on('click', 'a', function(e) {
        var currentPos = $(this).parent().prevAll().length;

        $nav.find('li').eq(currentPos).children('a').trigger('click');

        e.preventDefault();
    });


/* --------------------------------------------
    Navigation visible on scroll
-------------------------------------------- */

    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 645) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }
    
/* ---------------------------------------------------------------------
    Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
------------------------------------------------------------------------ */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
