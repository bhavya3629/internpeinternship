// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5; // Maximum number of attempts allowed

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (userGuess === targetNumber) {
            message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            message.style.color = "green";
            guessInput.disabled = true;
        } else if (attempts === maxAttempts) {
            message.textContent = `Game over! The correct number was ${targetNumber}.`;
            message.style.color = "red";
            guessInput.disabled = true;
        } else if (userGuess < targetNumber) {
            message.textContent = "Too low! Try again.";
            message.style.color = "red";
        } else {
            message.textContent = "Too high! Try again.";
            message.style.color = "red";
        }
    }

    guessInput.value = "";
    guessInput.focus();
}
