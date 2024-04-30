function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Assuming a successful form submission (you may want to add additional validation)
    displayConfirmationMessage();
  }
  
  function displayConfirmationMessage() {
    // Display the confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
  
    // Hide the form
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.style.display = 'none';
  }
  