document.addEventListener('DOMContentLoaded', function () {
const newsletterForm = document.getElementById('newsletterForm');
const confirmationMessage = document.getElementById('confirmationMessage');

newsletterForm.addEventListener('submit', function (event) {
event.preventDefault();

const emailInput = document.getElementById('email');
const userEmail = emailInput.value;

confirmationMessage.textContent = `Thank you for subscribing, ${userEmail}! :)`;
newsletterForm.reset();
    });
});
