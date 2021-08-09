// Mobile Nav Toggle
function navToggle() {
    var toggle = document.getElementById('navbarItems');
    if (toggle.style.opacity === "1") {
        toggle.style.opacity = "0";
      } else {
        toggle.style.opacity = "1";
      }
}

// Button click functions
// Github
function github() {
  window.open(
    "https://www.github.com", "_blank");
}

// LinkedIn
function github() {
  window.open(
    "https://www.linkedin.com", "_blank");
}

// Portfolio Filter 
const gridItems = document.querySelectorAll('.folio-item');
const folioBtn = document.querySelectorAll('.folio-btn');

// Show all categories on page load
function showAll() {
    gridItems.forEach(function(element) {
        element.classList.add('show-folio-item')
    })
}

// Category filter
function showCategory(category) {
    gridItems.forEach(function(element){
        if (element.classList.contains(category)) {
            element.classList.add('show-folio-item')
        }
        else {
            element.classList.remove('show-folio-item')
        }
    })
}

// Change button colour on category filter
folioBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleClass(folioBtn, this);
  });
});

function toggleClass(folioBtn, buttonToActivate) {
  folioBtn.forEach(function(btn) {
      btn.classList.remove('active');
  });
  buttonToActivate.classList.add('active');
}

showAll()

// MODAL
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// Modal Slider
var slideIndex = [1,1,1,1,1,1,1,1,1];
var slideId = ['slides1', 'slides2', 'slides3', 'slides4', 'slides5', 'slides6', 'slides7', 'slides8', 'slides9']
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
