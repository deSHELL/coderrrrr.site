// Function to load the correct ASCII art based on screen width
function loadAsciiArt() {
    const asciiArtElement = document.getElementById('asciiArt');
    const screenWidth = window.innerWidth;
    const artFile = screenWidth < 768 ? 'smallAsciiArt.txt' : 'bigAsciiArt.txt'; // Adjust the width condition as needed

    fetch(artFile)
        .then(response => response.text())
        .then(data => {
            asciiArtElement.textContent = data;
        })
        .catch(error => {
            console.error('Error loading ASCII art:', error);
            asciiArtElement.textContent = "Error loading ASCII art.";
        });
}

// Load the ASCII art on page load
window.onload = loadAsciiArt;

// Optionally, reload the ASCII art when the window is resized
window.onresize = loadAsciiArt;
