// Counter App

// Initialize the counter value
let counter = 0;

// Function to update the display
function updateDisplay() {
    const displayElement = document.getElementById("counter-display");
    displayElement.textContent = counter;
}

// Function to increment the counter
function incrementCounter() {
    counter++;
    updateDisplay();
}

// Function to decrement the counter
function decrementCounter() {
    counter--;
    updateDisplay();
}

// Initialize the display when the page loads
window.onload = () => {
    updateDisplay();
};
