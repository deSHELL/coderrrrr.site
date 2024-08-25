
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Function to fetch ASCII art from a file
async function fetchAsciiArt(filename) {
  try {
    const response = await fetch(filename);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading ASCII art:', error);
    return ''; // Return an empty string on error
  }
}

// Load ASCII art and update <pre>
async function displayAsciiArt() {
  const preElement = document.querySelector('pre');
  const bigAsciiArt = await fetchAsciiArt('bigasciiart.txt');
  const smallAsciiArt = await fetchAsciiArt('smallasciiart.txt');

  if (isMobileDevice) {
    preElement.textContent = smallAsciiArt;
  } else {
    preElement.textContent = bigAsciiArt;
  }
}

// Call the function to display the art
displayAsciiArt(); 
