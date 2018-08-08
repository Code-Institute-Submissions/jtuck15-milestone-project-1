
// Read More Button in Home Page

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});


// Home Button Fade in and Out

    $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#homeBtn').fadeIn(); 
        } else { 
            $('#homeBtn').fadeOut(); 
        } 
    }); 
    
// Home Button Smooth Scroll

    $('#homeBtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
