// Active on scroll - Update this comment!
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("nav-active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("nav-active");
    }
  });
}

// Mobile Nav Toggle
function navToggle() {
    var toggle = document.getElementById('navbarItems');
    if (toggle.style.opacity === "1") {
        toggle.style.opacity = "0";
      } else {
        toggle.style.opacity = "1";
      }
}

// Client Logo Slider
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
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

// Modal
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