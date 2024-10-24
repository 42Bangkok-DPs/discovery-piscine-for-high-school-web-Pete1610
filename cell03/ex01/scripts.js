const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10;

    // Check if the balloon explodes
    if (size > 420) {
        size = 200; // Explode and reset size
    }
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;

    // Change color in forward order
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener('mouseleave', () => {
    size -= 5;
    if (size < 200) {
        size = 200; // Prevent shrinking below 200px
    }
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;

    // Change color in reverse order
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
});
