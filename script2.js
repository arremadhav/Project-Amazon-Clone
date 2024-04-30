document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Assuming a successful form submission (you may want to add additional validation)
        displayThankYouMessage();
    });

    function displayThankYouMessage() {
        // Display the thank you message
        thankYouMessage.style.display = 'block';

        // Hide the form
        checkoutForm.style.display = 'none';
    }
});
