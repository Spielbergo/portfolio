const foltioContainer = document.querySelector('.folio-item-container');

// JSON File
const itemData = 'assets/js/modalContent.json';

// Click handler for Preview Buttons - Opens Modal
foltioContainer.addEventListener('click', function (e) {
    // Only target elements that have a 'modal-button' class
    if (e.target.classList.contains('modal-button')) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
  });

let resultsArray = [];

function updateDOMItems() {
    resultsArray.forEach((result) => {
        // Portfolio Item Container
        const folioItem = document.createElement('div');
        folioItem.classList.add('folio-item', result.category, 'show-folio-item', 'folio-page');
        
        // Portfolio Item Image
        const image = document.createElement('img');
        image.classList.add('folio-image');
        image.src = result.image;
        image.alt = 'Portfolio Project Screenshot';
        image.loading = 'lazy';
        image.width = '400';
        image.height = '250';

        // Portfolio item overlay
        const overlay = document.createElement('div');
        overlay.classList.add('folio-overlay');

        // Overlay button
        const overlayButton = document.createElement('button');
        // // CHECK OUT 'SET ATTRIBUTE' AND CHANGE IT NOT EFFICIENT!!!!!!!
        overlayButton.setAttribute('href', result.previewBtn);
        overlayButton.classList.add('modal-button');
        overlayButton.textContent = 'Preview';

        // Overlay links
        // First link
        const overlayLink = document.createElement('a');
        overlayLink.classList.add('button');
        overlayLink.href = result.code;
        overlayLink.target = "_blank";
        overlayLink.textContent = 'Code';
        // Second Link
        const overlayLink2 = document.createElement('a');
        overlayLink2.classList.add('button');
        overlayLink2.href = result.live;
        overlayLink2.target = "_blank";
        overlayLink2.textContent = 'Live';

        // Append
        foltioContainer.append(folioItem);
        folioItem.appendChild(image);
        folioItem.append(overlay);
        overlay.appendChild(overlayButton);
        // If JSON value is not set then remove the button
        result.code === undefined ? '' : overlay.appendChild(overlayLink);
        result.live === undefined ? '' : overlay.appendChild(overlayLink2);
    });
}

// Retrieve data from JSON
async function getItemData() {
    try {
        const response = await fetch(itemData);
        resultsArray = await response.json();
        console.log(resultsArray);
        updateDOMItems();
    } catch (error) {
        // alert('JSON data not available');
    }
}

// Event Listener
window.addEventListener('DOMContentLoaded', (e) => {
    getItemData();
});

