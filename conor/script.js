document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="options"]');
    const submitButton = document.getElementById('submitButton');

    // Function to update the submit button's disabled status
    function updateSubmitButtonStatus() {
        // Check if all checkboxes are checked
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        submitButton.disabled = !allChecked; // Enable button if all are checked, else disable
    }

    // Add a 'change' event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSubmitButtonStatus);
    });

    // Initially update the submit button status based on the current state of checkboxes
    updateSubmitButtonStatus();

    // Handle form submission
    document.getElementById('nightOutForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        // Insert redirection or form submission logic here
        window.location.href = 'https://vnoandvnylevents.ticketspice.com/elevated-spirits'; // Example redirection
    });
});
