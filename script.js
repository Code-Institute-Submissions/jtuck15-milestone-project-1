
// Read More Button in Home Page

$(document).ready(function() {
  $("#toggle").click(function() {
    var readMore = $("#toggle").text();
    if (readMore == "Read More") {
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

// Read More Button for Mick Jagger

$(document).ready(function() {
  $("#switch").click(function() {
    var readMoreTwo = $("#switch").text();
    if (readMoreTwo == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#switch").text("Read Less");
      $("#word").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#switch").text("Read More");
      $("#word").slideUp();
    }
  });
});

// Read More Button for Keith Richards

$(document).ready(function() {
  $("#change").click(function() {
    var readMoreThree = $("#change").text();
    if (readMoreThree == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#change").text("Read Less");
      $("#info").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#change").text("Read More");
      $("#info").slideUp();
    }
  });
});

// Read More Button for Charlie Watts

$(document).ready(function() {
  $("#touch").click(function() {
    var readMoreFour = $("#touch").text();
    if (readMoreFour == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#touch").text("Read Less");
      $("#moreinfo").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#touch").text("Read More");
      $("#moreinfo").slideUp();
    }
  });
});


// Read More Button for Ronnie Wood

$(document).ready(function() {
  $("#press").click(function() {
    var readMoreFive = $("#press").text();
    if (readMoreFive == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#press").text("Read Less");
      $("#letters").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#press").text("Read More");
      $("#letters").slideUp();
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
