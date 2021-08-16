const form = document.getElementById('form');
const messageContainer = document.getElementById('messageContainer');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style Main Message for an Error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }

    // If form is valid
    if (isValid) {
        message.textContent = 'Your form has been sent'
        message.style.color = 'green';
        messageContainer.style.color = 'green';
    }
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData)
