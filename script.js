const btn = document.querySelector('#btn');
const container = document.getElementById('container');
const boxes = document.querySelectorAll('.box');
let ans = "";


boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        ans = box.innerText; 
        removeActive(); 
        box.classList.add('active'); 
    });
});

btn.addEventListener('click', () => {
    if (ans) { 
        container.innerHTML = `
        <h1>Thank you!</h1>
        <p>Feedback: ${ans}</p>
        <p>We'll use your feedback to improve our customer support.</p>`;
    } else {
        alert("Please select a feedback option before submitting!"); 
    }
});

function removeActive() {
    boxes.forEach((box) => {
        box.classList.remove('active'); 
    });
}
