// Function to add two numbers and display the result
function add() {
    const first = Number(document.getElementById('first-number').value); // Get the first number from the input
    const second = Number(document.getElementById('second-number').value); // Get the second number from the input
    const result = first + second; // Perform addition
    displayResult(result); // Display the result
}

// Function to subtract the second number from the first and display the result
function subtract() {
    const first = Number(document.getElementById('first-number').value); // Get the first number from the input
    const second = Number(document.getElementById('second-number').value); // Get the second number from the input
    const result = first - second; // Perform subtraction
    displayResult(result); // Display the result
}

// Function to multiply two numbers and display the result
function multiply() {
    const first = Number(document.getElementById('first-number').value); // Get the first number from the input
    const second = Number(document.getElementById('second-number').value); // Get the second number from the input
    const result = first * second; // Perform multiplication
    displayResult(result); // Display the result
}

// Function to divide the first number by the second and display the result
function divide() {
    const first = Number(document.getElementById('first-number').value); // Get the first number from the input
    const second = Number(document.getElementById('second-number').value); // Get the second number from the input
    const result = first / second; // Perform division
    displayResult(result); // Display the result
}

// Function to calculate the power (first number raised to the power of the second) using a for loop
function power() {
    const base = Number(document.getElementById('first-number').value); // Get the base (first number)
    const exponent = Number(document.getElementById('second-number').value); // Get the exponent (second number)
    let result = 1;
    
    // Loop to calculate base raised to the exponent
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    
    displayResult(result); // Display the result
}

// Function to clear the input fields and reset the output
function clearFields() {
    document.getElementById('first-number').value = ""; // Clear the first number input
    document.getElementById('second-number').value = ""; // Clear the second number input
    document.getElementById('output').innerHTML = ""; // Clear the result display
}

// Function to display the result in the output element and style it based on whether the result is negative
function displayResult(result) {
    const output = document.getElementById('output'); // Get the output element
    output.innerHTML = result; // Display the result

    // Style the output differently for negative results
    if (result < 0) {
        output.style.color = 'red'; // Change text color to red
        output.style.backgroundColor = 'red'; // Optionally change background to red
    } else {
        output.style.color = 'black'; // Reset text color for non-negative results
        output.style.backgroundColor = 'transparent'; // Reset background for non-negative results
    }
}
