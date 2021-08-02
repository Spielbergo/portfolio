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
