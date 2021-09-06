
const foltioContainer = document.querySelector('.folio-item-container');

const itemsJson = 'assets/js/modalContent.json';

let resultsArray = [];

function itemsContent(page) {
    const currentArray = page === 'results' ? resultsArray : Object.values(favorites);
    currentArray.forEach((result)  => {
        // Portfolio Item Container
        const folioItem = document.createElement('div');
        folioItem.classList.add('folio-item', 'grid');
        // Portfolio Item Image
        const folioImage = document.createElement('img');
        folioImage.src = itemsList.slide1;
    });
}

async function getJsonData() {
    try {
        const response = await fetch(itemsJson);
        resultsArray = await response.json();
        updateDOM('results');
    } catch (error) {
        // Catch Error Here
    }
}

function updateDOM(page) {
    createDOMNodes(page);
}
