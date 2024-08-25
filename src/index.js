document.addEventListener('DOMContentLoaded', () => {
    const preElement = document.querySelector('pre');
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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

    async function displayAsciiArt() {
      const bigAsciiArt = await fetchAsciiArt('bigAsciiArt.txt');
      const smallAsciiArt = await fetchAsciiArt('smallAsciiArt.txt');

      if (isMobileDevice) {
        preElement.textContent = smallAsciiArt;
      } else {
        preElement.textContent = bigAsciiArt;
      }
    }

    displayAsciiArt();
  });