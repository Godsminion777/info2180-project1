/* Add your JavaScript to this file */


document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form, the email input field, and the message div
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');

    
    newsletterForm.addEventListener('submit', function(event) {
        // Prevent the form's default submission which reloads the page
        event.preventDefault();

        // Get the value from the email input field and trim whitespace
        const emailValue = emailInput.value.trim();

        
        if (emailValue === '') {
            
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            
            messageDiv.innerHTML = 'Thank you! Your email address <strong>' + emailValue + '</strong> has been added to our mailing list!';
            
            // Clear the input field after successful submission
            emailInput.value = '';
        }
    });
});