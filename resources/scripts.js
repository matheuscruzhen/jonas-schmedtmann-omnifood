$(document).ready(function() {


    // STICKY NAVIGATION 
       $('.js--section-features').waypoint(function(direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
       }, {
           offset: '60px;'
       });

       //  SCROLL ON BUTTONS
       $('.js--scroll-to-plans').click(function () {
           $('html, body').animate({scrollTop: $('.js--section-plans').offset().top }, 1000);
       });

       $('.js--scroll-to-start').click(function () {
           $('html, body').animate({scrollTop: $('.js--section-features').offset().top }, 1000);
       });

    //    NAVIGATION SCROLL

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });   

});