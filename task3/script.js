document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit");
  const resultsContainer = document.getElementById("results");
  const questionContainers = document.getElementsByClassName("question-container");
  let currentQuestionIndex = 0;

  function showQuestion(index) {
    // Hide all question containers
    for (let i = 0; i < questionContainers.length; i++) {
      questionContainers[i].style.display = "none";
    }

    // Show the question at the specified index
    if (index >= 0 && index < questionContainers.length) {
      questionContainers[index].style.display = "block";
    }
  }

  function showNextQuestion() {
    // Hide the current question
    questionContainers[currentQuestionIndex].style.display = "none";

    // Move to the next question
    currentQuestionIndex++;

    // If there are more questions, show the next question
    if (currentQuestionIndex < questionContainers.length) {
      showQuestion(currentQuestionIndex);
    } else {
      // If all questions have been answered, show the results
      showResults();
    }
  }

  function showResults() {
    let score = 0;

    for (let i = 0; i < questionContainers.length; i++) {
      const questionContainer = questionContainers[i];
      const selectedAnswer = questionContainer.querySelector("input[type='radio']:checked");

      if (selectedAnswer !== null) {
        const correctAnswer = questionContainer.getAttribute("data-answer");

        if (selectedAnswer.value === correctAnswer) {
          score++;
          questionContainer.style.color = "green";
        } else {
          questionContainer.style.color = "red";
        }
      }
    }

    const totalQuestions = questionContainers.length;
    const scorePercentage = (score / totalQuestions) * 100;

    resultsContainer.textContent = "Your score: " + score + "/" + totalQuestions + " (" + scorePercentage + "%)";
    resultsContainer.style.display = "block";
  }

  // Show the first question initially
  showQuestion(currentQuestionIndex);

  submitButton.addEventListener("click", function() {
    const selectedAnswer = questionContainers[currentQuestionIndex].querySelector("input[type='radio']:checked");

    if (selectedAnswer !== null) {
      showNextQuestion();
    } else {
      alert("Please select an answer before proceeding.");
    }
  });
});
