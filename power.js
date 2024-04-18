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
        e.target.style.backgroundColor = 'black';
    }
});
