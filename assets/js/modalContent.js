const modalsContainer = document.querySelector('.modals-container');

// Modal JSON
const modalJson = 'assets/js/modalContent.json';

let modalArray = [];

// MODALS SECTION
function updateDOMModals() {
    modalArray.forEach((modalItems) => {
        // Modal Container
        const modalContainer = document.createElement('div');
        modalContainer.setAttribute('id', modalItems.preview);
        modalContainer.classList.add('modal');
        // Modal Content
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        // Modal Body
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        // Slide 1 Container
        const slideContainer = document.createElement('div');
        slideContainer.classList.add(modalItems.slides, 'slider-fade');
        // Slide Social Container (top bar)
        const slideSocial = document.createElement('div');
        slideSocial.classList.add('slider-social');
        // Slide Link 1 - Live
        const slideLink1 = document.createElement('a');
        slideLink1.ariaLabel = 'Link to live website';
        slideLink1.href = modalItems.live;
        slideLink1.target = '_blank';
        const slideIcon1 = document.createElement('i');
        slideIcon1.classList.add('fa', 'fa-globe');
        // Slide Link 2 - Code
        const slideLink2 = document.createElement('a');
        slideLink2.ariaLabel = 'Link to Github for this project';
        slideLink2.href = modalItems.code;
        slideLink2.target = '_blank';
        const slideIcon2 = document.createElement('i');
        slideIcon2.classList.add('fa', 'fa-github');
        // Slide Link 3 - Close Button
        const closeSpan = document.createElement('span');
        const closeBtn = document.createElement('i');
        closeBtn.classList.add('fa', 'fa-times-circle', 'close');
        // Slide Image
        const slideImage = document.createElement('img');
        slideImage.src = modalItems.folioSlide1;
        slideImage.alt = 'Portfolio Preview Image 1';
        // Slide Caption
        const slideCaption = document.createElement('div');
        slideCaption.classList.add('slider-caption');
        // Slide Text
        const slideCaptionText = document.createElement('p');
        slideCaptionText.textContent = modalItems.caption;
        // Slide Numbers
        const sliderNumber = document.createElement('div')
        sliderNumber.classList.add('slider-numbers');
        sliderNumber.textContent = '1 / 3';

        // Append
        modalsContainer.append(modalContainer);
        modalContainer.appendChild(modalContent);
        modalContent.appendChild(modalBody);
        modalBody.appendChild(slideContainer);
        slideContainer.appendChild(slideSocial);
        slideSocial.appendChild(slideLink1);
        slideLink1.appendChild(slideIcon1);
        slideSocial.appendChild(slideLink2);
        slideLink2.appendChild(slideIcon2);
        slideSocial.appendChild(closeSpan);
        closeSpan.appendChild(closeBtn);
        slideContainer.append(slideImage, slideCaption);
        slideCaption.appendChild(slideCaptionText);
        slideCaption.appendChild(sliderNumber);
    });
}

async function getModal() {
    try {
        const modalResponse = await fetch(modalJson);
        modalArray = await modalResponse.json();
        console.log(modalArray);
        updateDOMModals();
    } catch (error) {
        // alert('JSON data not available');
    }
}

// On Load
getModal();