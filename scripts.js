<<<<<<< HEAD
/* Add your JavaScript to this file */


=======
<<<<<<< HEAD
/* Add your JavaScript to this file */

>>>>>>> landing-page-implementation
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

<<<<<<< HEAD
        
        if (emailValue === '') {
            
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            
            messageDiv.innerHTML = 'Thank you! Your email address <strong>' + emailValue + '</strong> has been added to our mailing list!';
            
            // Clear the input field after successful submission
            emailInput.value = '';
        }
    });
});
=======
        // Check if the email field is empty
        if (emailValue === '') {
            // Display the error message if no email is entered
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
           
            messageDiv.innerHTML = 'Thank you! Your email address <strong>' + emailValue + '</strong> has been added to our mailing list!';
            
            // Clears the input field after successful submission
            emailInput.value = '';
        }
    });
});
=======
<<<<<<< HEAD
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

        // Check if the email field is empty
        if (emailValue === '') {
            // Display the error message if no email is entered
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
           
            messageDiv.innerHTML = 'Thank you! Your email address <strong>' + emailValue + '</strong> has been added to our mailing list!';
            
            // Clears the input field after successful submission
            emailInput.value = '';
        }
    });
});
=======
/* Add your JavaScript to this file */
>>>>>>> 523d8fd63b68f64377e732c26c02c51ecc04c3dd

>>>>>>> 523d8fd63b68f64377e732c26c02c51ecc04c3dd
>>>>>>> landing-page-implementation
