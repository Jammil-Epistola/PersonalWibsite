document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById('contactForm').reset();  // Clear the form
    } else {
        alert('Please fill out all fields before submitting.');
    }
});