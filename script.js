const btn = document.querySelector('#btn');
const container = document.getElementById('container');
const boxes = document.querySelectorAll('.box');
let ans = "";

// Attach event listeners to each box
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        ans = box.innerText; // Get the text content of the clicked box
        removeActive(); // Remove the 'active' class from all boxes
        box.classList.add('active'); // Add 'active' class to the clicked box
    });
});

btn.addEventListener('click', () => {
    if (ans) { // Ensure a box is selected before proceeding
        container.innerHTML = `
        <h1>Thank you!</h1>
        <p>Feedback: ${ans}</p>
        <p>We'll use your feedback to improve our customer support.</p>`;
    } else {
        alert("Please select a feedback option before submitting!"); // Add a fallback alert
    }
});

function removeActive() {
    boxes.forEach((box) => {
        box.classList.remove('active'); // Remove 'active' class from all boxes
    });
}
