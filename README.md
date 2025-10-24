DESCRIPTION: Overview
This project is a fully functional multiple-choice quiz application built with HTML, CSS, and JavaScript. It presents the user with a series of questions one at a time, allows navigation between them, applies a timer for each question, and displays the score at the end. The design is clean, modern, and responsive, aiming to deliver a smooth user experience.

HTML DESCRIPTION:
The HTML structure serves as the base UI for the quiz interface.
Main Components:

1. Header Section (.quiz-header)
Displays the current question number and a countdown timer for the current question.

2. Question Display (#question)
Dynamically shows the question text from JavaScript.

3. Options Section (#options)
This div is populated dynamically with multiple-choice options for each question.
Each option is clickable and styled based on correctness after selection or timeout.

4. Navigation Buttons
Previous Button (#prev-btn): Allows moving back to the previous question.
Next/Submit Button (#next-btn): Moves to the next question or submits the quiz if it's the last one.

5. Restart Button (#restart-btn)
Hidden by default and shown only after quiz completion to restart the quiz from the beginning.

6. Score Display (#score)
Used to show the user’s final score after the quiz ends.

CSS DESCRIPTION:
The CSS styling creates a colorful, responsive, and user-friendly UI for the quiz.

KEY FEATURES:

Global Reset
* { margin: 0; padding: 0; box-sizing: border-box; } ensures a consistent layout across browsers.

Font and Aesthetics
Uses the Quicksand Google Font for a clean, bold, and readable style.

Background and Container
Gradient background with a central white container for the quiz content.
Box shadows and border radius create a card-like design.

Responsive Design
Media queries adapt the layout and font sizes for small screens (mobile).

Option Styling
Options change color based on interaction:
Normal state: Light gray

Hover: Light blue

Correct answer: Green background

Wrong answer: Red background

Disabled options cannot be re-clicked.

Buttons
Styled with consistent color, padding, rounded corners, and hover effects.

Animations
Entry fade-in animation for the quiz container.

JavaScript Description
JavaScript handles the core logic for loading questions, managing the timer, handling user selections, tracking answers, and calculating the score.

MAIN FUNCTIONALITIES:

1. Quiz Data
An array of objects (quizQuestions), each containing:
question: The question text
options: Array of possible answers
correctAnswer: Index of the correct option

2. State Management
currentIndex: Tracks the index of the current question.
userAnswers: Stores selected answers for each question.
score: Final score after completing the quiz.
timeLeft: Countdown in seconds for each question.

3. Dynamic Rendering
loadQuestion(): Dynamically inserts the question and options into the HTML and applies correct/wrong styles if answered.

4. Answer Selection
handleAnswer(): Handles click events on options, disables further selection, and marks correct/wrong answers.

5. Auto Reveal on Timeout
If time runs out, autoReveal() highlights the correct answer.

6. Timer Management
A separate timer is created for each question using setInterval(). The timer resets when moving to the next question.

7. Navigation
Next and Previous buttons allow forward and backward navigation through questions.
Final question changes the "Next" button to "Submit" to finish the quiz.

8. Score Calculation
After submission, finishQuiz() calculates the number of correct answers and displays the result.

9. Restart
The restartBtn resets all data and reloads the first question for a new attempt.

SUMMARY OF APPLICATION FLOW

1. The app loads and initializes the first question.
2. The timer starts (60 seconds).
3. The user selects an answer or waits for auto-reveal.
4. The user navigates using "Next" or "Previous".
5. After the last question, clicking "Submit" ends the quiz.
6. The score is calculated and displayed.
7. 7. The "Restart" button reloads the quiz for a new attempt.

Potential Use Cases
Web development portfolio projects
Front-end development practice
Interview project demonstration
Educational or training websites

OUTPUT:

![Screenshot 2025-07-09 165552](https://github.com/user-attachments/assets/795a7bcf-f5f6-49cd-b0ce-ceea7c2d7a64)

![Screenshot 2025-07-09 165626](https://github.com/user-attachments/assets/73ce06ba-1ae5-423a-90f2-f2b8179542cd)

![Screenshot 2025-07-09 165644](https://github.com/user-attachments/assets/b4e392c5-378c-4038-b411-6e5ed9a62301)




