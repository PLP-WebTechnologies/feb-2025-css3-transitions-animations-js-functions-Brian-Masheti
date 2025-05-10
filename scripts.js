// Get elements
const pickButton = document.getElementById('pickButton');
const message = document.getElementById('message');
const images = document.querySelectorAll('.data-image');

let selectedImageSrc = '';

// When an image is clicked
images.forEach(image => {
    image.addEventListener('click', () => {
        // Remove 'selected' class from all images
        images.forEach(img => img.classList.remove('selected'));
        // Add 'selected' class to clicked image
        image.classList.add('selected');
        // Store selected image src
        selectedImageSrc = image.src;
    });
});

// When the page loads, check if a favorite already exists
window.onload = function() {
    const favorite = localStorage.getItem('favoriteVisualization');
    if (favorite) {
        message.style.display = 'block';
        message.innerText = `Your saved favorite visualization is shown below 👇`;
        // Highlight saved image
        images.forEach(img => {
            if (img.src === favorite) {
                img.classList.add('selected');
            }
        });
    }
};

// When the button is clicked
pickButton.addEventListener('click', function() {
    if (selectedImageSrc) {
        // Store the favorite in localStorage
        localStorage.setItem('favoriteVisualization', selectedImageSrc);

        // Update the message
        message.style.display = 'block';
        message.innerText = `Saved! 🎉 Your favorite visualization has been updated.`;

        // Trigger popUp animation
        message.style.animation = 'popUp 0.5s ease-in-out forwards';

        // Reset animation after it's done so it can be re-triggered again
        setTimeout(() => {
            message.style.animation = '';
        }, 600);
    } else {
        // If no image is selected
        message.style.display = 'block';
        message.innerText = `Please select a visualization first!`;
        message.style.animation = 'popUp 0.5s ease-in-out forwards';
        setTimeout(() => {
            message.style.animation = '';
        }, 600);
    }
});
