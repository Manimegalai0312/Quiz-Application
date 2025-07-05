// Wait until the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Define quiz questions: each has a question, options, and index of correct answer
  const quizQuestions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"], correctAnswer: 0 },
    { question: "How do you comment in CSS?", options: ["<!-- comment -->", "/* comment */", "// comment", "# comment"], correctAnswer: 1 },
    { question: "Which is NOT a JS data type?", options: ["String", "Boolean", "Number", "Float"], correctAnswer: 3 },
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correctAnswer: 2 },
    { question: "Add to end of array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0 },
    { question: "HTML tag to link JS?", options: ["<script>", "<javascript>", "<js>", "<link>"], correctAnswer: 0 },
    { question: "typeof null in JS?", options: ["null", "undefined", "object", "number"], correctAnswer: 2 },
    { question: "CSS to change text color?", options: ["text-color", "font-color", "color", "text-style"], correctAnswer: 2 },
    { question: "Valid array declaration?", options: ["var colors = (1:'red')", "var colors = ['red']", "var colors = 'red'", "var colors = {1:'red'}"], correctAnswer: 1 },
    { question: "Click event attribute?", options: ["onchange", "onmouseclick", "onclick", "onmouseover"], correctAnswer: 2 }
  ];

  // Initial state setup
  let currentIndex = 0;
  let userAnswers = Array(quizQuestions.length).fill(null); // store selected answers
  let score = 0;
  let timer;
  let timeLeft = 60;

  // Get references to DOM elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const currentQEl = document.getElementById("current-question");
  const timeEl = document.getElementById("time");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const restartBtn = document.getElementById("restart-btn");
  const scoreEl = document.getElementById("score");

  // Start 60-second timer for each question
  function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timeEl.textContent = timeLeft;

    // Count down every second
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;

      // If time runs out, show the correct answer
      if (timeLeft <= 0) {
        clearInterval(timer);
        autoReveal();
      }
    }, 1000);
  }

  // Load current question and its options
  function loadQuestion() {
    const q = quizQuestions[currentIndex];
    currentQEl.textContent = currentIndex + 1;
    questionEl.textContent = q.question;
    optionsEl.innerHTML = ""; // clear previous options
    scoreEl.textContent = ""; // clear score display

    startTimer(); // start timer for this question

    // Loop through each option and create a button
    q.options.forEach((opt, idx) => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt;

      // If user already answered, show correct/incorrect feedback
      if (userAnswers[currentIndex] !== null) {
        div.classList.add("disabled");
        if (idx === q.correctAnswer) {
          div.classList.add("correct");
        }
        if (idx === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.correctAnswer) {
          div.classList.add("wrong");
        }
      }

      // Handle option selection
      div.addEventListener("click", () => {
        if (userAnswers[currentIndex] !== null) return; // prevent multiple answers
        handleAnswer(div, idx);
      });

      optionsEl.appendChild(div); // add option to DOM
    });

    // Show or hide the Prev button
    prevBtn.style.display = currentIndex > 0 ? "inline-block" : "none";

    // Change Next button to "Submit" on last question
    nextBtn.textContent = currentIndex === quizQuestions.length - 1 ? "Submit" : "Next";
  }

  // Handle answer selection logic
  function handleAnswer(optionEl, selectedIdx) {
    clearInterval(timer); // stop timer
    userAnswers[currentIndex] = selectedIdx; // record answer

    const correctIdx = quizQuestions[currentIndex].correctAnswer;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach((el, i) => {
      el.classList.add("disabled");
      if (i === correctIdx) el.classList.add("correct");
      if (i === selectedIdx && i !== correctIdx) el.classList.add("wrong");
    });
  }

  // Automatically show correct answer if time runs out
  function autoReveal() {
    const correctIdx = quizQuestions[currentIndex].correctAnswer;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach((el, i) => {
      el.classList.add("disabled");
      if (i === correctIdx) el.classList.add("correct");
    });
  }

  // Move to next question or finish quiz
  nextBtn.addEventListener("click", () => {
    if (currentIndex < quizQuestions.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      finishQuiz();
    }
  });

  // Go to previous question
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion();
    }
  });

  // Restart the quiz from beginning
  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    userAnswers = Array(quizQuestions.length).fill(null); // clear previous answers
    restartBtn.style.display = "none"; // hide restart
    nextBtn.style.display = "inline-block"; // show Next
    prevBtn.style.display = "none"; // hide Prev on first question
    loadQuestion(); // reload quiz
  });

  // Calculate and show final score
  function finishQuiz() {
    clearInterval(timer); // stop timer

    // Count how many answers were correct
    score = userAnswers.reduce((total, ans, i) => {
      return ans === quizQuestions[i].correctAnswer ? total + 1 : total;
    }, 0);
    
    questionEl.textContent = "Quiz Completed!";
    questionEl.innerHTML = `<div class="quiz-complete">🎉 Quiz Completed!</div>`;
    optionsEl.innerHTML = ""; // clear options
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    scoreEl.textContent = `✅ You scored ${score} out of ${quizQuestions.length}`;
    restartBtn.style.display = "inline-block"; // show restart
  }

  // Load the first question on page load
  loadQuestion();
});
