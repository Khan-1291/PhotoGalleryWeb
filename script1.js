const arryofSlideImages = [
    { image: '1.png', description: 'Project 1: A web application for task management.' },
    { image: '2.png', description: 'Project 2: A mobile app for health tracking.' },
    { image: '3.png', description: 'Project 3: A web application for task management.' },
    { image: '4.png', description: 'Project 4: A mobile app for health tracking.' },
    { image: '5.png', description: 'Project 5: A web application for task management.' },
    { image: '6.png', description: 'Project 6: A web application for task management.' },
    { image: '7.png', description: 'Project 7: A web application for task management.' },
    { image: '8.png', description: 'Project 8: A web application for task management.' },
    { image: '9.png', description: 'Project 9: An e-commerce website with shopping cart features.' },
    { image: '10.png', description: 'Project 10: A mobile app for health tracking.' },
    { image: '11.png', description: 'Project 11: An e-commerce website with shopping cart features.' },
    { image: '12.png', description: 'Project 12: An e-commerce website with shopping cart features.' },
    { image: '13.png', description: 'Project 13: A mobile app for health tracking.' },
    { image: '14.png', description: 'Project 14: An e-commerce website with shopping cart features.' },
    { image: '15.png', description: 'Project 15: A mobile app for health tracking.' },
    { image: '16.png', description: 'Project 16: An e-commerce website with shopping cart features.' },
    { image: '17.png', description: 'Project 17: An e-commerce website with shopping cart features.' },
];

const targetElemnt1 = document.getElementById("imageContainer");
arryofSlideImages.forEach(project => {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.description;

    // Create an overlay div for the description
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerText = project.description;

    // Append the image and overlay to the container
    const projectDiv = document.createElement('div');
    projectDiv.style.position = 'relative'; // Positioning for overlay
    projectDiv.appendChild(img);
    projectDiv.appendChild(overlay);
    targetElemnt1.appendChild(projectDiv);

    // Set up mouseover and mouseout events
    img.addEventListener('mouseover', () => {
        overlay.style.display = 'block'; // Show overlay
    });
    img.addEventListener('mouseout', () => {
        overlay.style.display = 'none'; // Hide overlay
    });
});

let Counter = 0; // Start counter from 0
const targetElemnt = document.getElementById("slideImage");
setInterval(function () {
    targetElemnt.src = arryofSlideImages[Counter].image; // Update the slideshow image
    Counter = (Counter + 1) % arryofSlideImages.length; // Cycle through images
}, 5000);

function getRandomColour() {
    let colour1 = Math.ceil(0 + Math.random() * 230);
    let colour2 = Math.ceil(0 + Math.random() * 230);
    let colour3 = Math.ceil(0 + Math.random() * 230);

    return `rgb(${colour1}, ${colour2},${colour3})`
}

setInterval(function () {
    document.getElementById("head").style.color = getRandomColour();
    document.getElementById("slideImage").style.border = `6px solid ${getRandomColour()}`;
}, 3000);

// Radio button logic
let check = document.querySelectorAll('input[type="radio"]');
check = [...check];  // Convert NodeList to Array (optional, but fine)

let currentCheckBox = 0;

setInterval(() => {
    // Uncheck all checkboxes
    check.forEach(radio => {
        radio.checked = false;
    });

    // Check the current checkbox
    check[currentCheckBox].checked = true;

    // Move to the next checkbox (loop back to the first one)
    currentCheckBox = (currentCheckBox + 1) % check.length;

}, 6000);  // Runs every 6 seconds