// Function to create grid
function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid

    const cellSize = 960 / size; // Total space divided by number of squares
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-cell');
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
            container.appendChild(div);
        }
    }
}

// Initial grid creation
createGrid(16);

// Function to handle button click
document.getElementById('resetButton').addEventListener('click', function() {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = parseInt(newSize);
    if (newSize && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number (1-100).");
    }
});

// Hover effect
document.getElementById('container').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-cell')) {
        // Randomize RGB values
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

        // Darken the square by 10%
        const currentColor = e.target.style.backgroundColor;
        if (currentColor !== 'black') {
            let [, red, green, blue] = currentColor.match(/\d+/g);
            red = Math.max(0, red - 25.5); // 25.5 is 10% of 255
            green = Math.max(0, green - 25.5);
            blue = Math.max(0, blue - 25.5);
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
});


//  button 
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to add hover effect with random colors to an element
function addRandomColorHoverEffect(element, property) {
    element.addEventListener('mouseover', function() {
        this.style[property] = getRandomColor();
    });

    // Optional: Reset the color when the mouse leaves the element
    element.addEventListener('mouseout', function() {
        this.style[property] = ''; // Reset to original color
    });
}

// Select the h1 and button elements
const h1Element = document.getElementById('randomColorText');
const resetButton = document.getElementById('resetButton');

// Add hover effects to the elements
addRandomColorHoverEffect(h1Element, 'color');
addRandomColorHoverEffect(resetButton, 'backgroundColor');



