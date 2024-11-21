document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = "valentinecard.html"; // Replace with the URL of your valentine page
});

document.getElementById('noBtn').addEventListener('click', function(event) {
    // Prevent the default behavior of the button (e.g., form submission)
    event.preventDefault();

    // Get the width and height of the window
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate random values for the new position of the button
    var randomTop = Math.floor(Math.random() * (windowHeight - 50)); // Adjusted to ensure the button doesn't go off-screen
    var randomLeft = Math.floor(Math.random() * (windowWidth - 100)); // Adjusted to ensure the button doesn't go off-screen

    // Set the new position of the button
    document.getElementById('noBtn').style.top = randomTop + 'px';
    document.getElementById('noBtn').style.left = randomLeft + 'px';
});
