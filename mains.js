document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const creditCard = document.getElementById('credit-card').value;
    const expDate = document.getElementById('exp-date').value;
    const cvv = document.getElementById('cvv').value;

    // You can perform further validation and processing here
    
    // Display a confirmation message
    const confirmationMessage = `Thank you, ${name}! Your order has been placed.`;
    document.getElementById('confirmation-message').textContent = confirmationMessage;
});
