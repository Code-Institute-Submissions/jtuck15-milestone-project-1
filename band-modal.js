
// Get the modal, Mick Jagger
var modal = document.getElementById('jaggerModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('jaggerImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-band")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////

// Get the modal, Keith Richards
var modalTwo = document.getElementById('richardsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('richardsImg');
var modalTwoImg = document.getElementById("img02");
var captionTwoText = document.getElementById("captionKR");
img.onclick = function(){
    modalTwo.style.display = "block";
    modalTwoImg.src = this.src;
    captionTwoText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-two")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modalTwo.style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////

// Get the modal, Charlie Watts
var modalThree = document.getElementById('wattsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('wattsImg');
var modalThreeImg = document.getElementById("img03");
var captionThreeText = document.getElementById("captionCW");
img.onclick = function(){
    modalThree.style.display = "block";
    modalThreeImg.src = this.src;
    captionThreeText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-three")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modalThree.style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////

// Get the modal, Ronnie Wood
var modalFour = document.getElementById('woodModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('woodImg');
var modalFourImg = document.getElementById("img04");
var captionFourText = document.getElementById("captionRW");
img.onclick = function(){
    modalFour.style.display = "block";
    modalFourImg.src = this.src;
    captionFourText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-four")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modalFour.style.display = "none";
}