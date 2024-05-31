document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");

    // Input elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Feedback elements
    const submitSuccessMessage = document.getElementById("submitSuccessMessage");
    const submitErrorMessage = document.getElementById("submitErrorMessage");

    function showValidationMessage(input, message) {
        const feedbackElement = input.nextElementSibling;
        feedbackElement.classList.add("d-block");
        feedbackElement.innerText = message;
    }

    function hideValidationMessage(input) {
        const feedbackElement = input.nextElementSibling;
        feedbackElement.classList.remove("d-block");
        feedbackElement.innerText = "";
    }

    function validateInput(input, validationMessage) {
        if (!input.value.trim()) {
            showValidationMessage(input, validationMessage);
            return false;
        } else {
            hideValidationMessage(input);
            return true;
        }
    }

    function validateForm() {
        let isValid = true;
        isValid &= validateInput(nameInput, "El nombre es obligatorio");
        isValid &= validateInput(emailInput, "El mail es obligatorio");
        isValid &= validateInput(phoneInput, "El número telefónico es obligatorio");
        isValid &= validateInput(messageInput, "El mensaje es obligatorio");
        return Boolean(isValid); 
    }

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
            submitErrorMessage.classList.remove("d-none");
            submitSuccessMessage.classList.add("d-none");
        } else {
            submitSuccessMessage.classList.remove("d-none");
            submitErrorMessage.classList.add("d-none");
        }
    });
});
