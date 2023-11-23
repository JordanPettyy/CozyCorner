document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add additional validation here before submitting the form

        const emailInput = document.getElementById('email');
        const userEmail = emailInput.value;

        // For simplicity, just display a confirmation message
        confirmationMessage.textContent = `Thank you for subscribing, ${userEmail}! :)`;
        newsletterForm.reset(); // Optional: Clear the form after submission
    });
});
