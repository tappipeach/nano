 $(document).ready( function() {



// Mobile Menu
/*$("#mobile-nav").html($("#main-nav").html());
$("#mobile-nav ul img").remove();
$("#mobile-nav ul ul").remove();
        $("#nav-trigger span").click(function(){
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");
            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        }); */

        $(function()
        {
              var expanded = false;
              $("#mobile-nav").html($("#navid").html());
              $('#nav-trigger span').click(function() {

                          if (!expanded)
                          {
                              $('nav#mobile-nav').animate({'left' : '-24px'}, {duration : 400});
                              expanded = true;
                          }
                          else
                          {
                             $('nav#mobile-nav').animate({'left' : '1200px'}, {duration: 400});
                              expanded = false;
                          }
                      }); 

        $('nav#mobile-nav .wrap').hide();
        $('nav#mobile-nav h4').click(function() {               // click h4
            var $this = $(this).next('nav#mobile-nav .wrap');   // find the next .wrap div after the selected h4
            $('nav#mobile-nav .wrap').not($this).slideUp();     // if sub menu is not related to clicked h4, toggle it up
            $this.slideToggle('fast');                          // toggle the selected menu. BAMCIS.
        });
 }); 





// Main Navigation fade-in on scroll
$(window).scroll(function(){                          
            if ($(this).scrollTop() > 350) {
                $('#fade-menu').fadeIn(600);
            } else {
                $('#fade-menu').fadeOut(600);
            }
        });





// Content fades in on scroll
 tiles = $('.col h1, .col h4, .col p, .video h1, iframe, .sponsors h1, .sponsors p, .sponsors a').fadeTo(0,0);

 $(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(500,1);
    });
 });

 function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop +    windowHeight))
      result.push(this);
  });
  return $(result);
}

inWindow('.col h1, .col h4, .col p, .video h1, iframe, .sponsors h1, .sponsors p, .sponsors a').fadeTo(0,1);

});