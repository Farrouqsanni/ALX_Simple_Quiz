// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4";  // Correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
