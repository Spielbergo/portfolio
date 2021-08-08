const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style Main Message for an Error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // If form is valid
    if (isValid) {
        message.textContent = 'Successfully Registered!'
        message.style.color = 'green';
        messageContainer.style.color = 'green';
    }
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid) {
        storeFormData();
    }
}


// Event Listener
form.addEventListener('submit', processFormData)
