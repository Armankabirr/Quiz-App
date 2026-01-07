const qustions = [
    {
        qustion: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }, 
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        qustion: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        qustion: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false }
        ]
    },
    {
        qustion: "What is the largest ocean on Earth?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    }
];

const qustionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQustionIndex = 0;
let score = 0;

function startQuiz() {
    currentQustionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQustion();
}



function showQustion() {
    resetState();
    let currentQustion = qustions[currentQustionIndex];
    let qustionNo = currentQustionIndex + 1;
    qustionElement.innerHTML = qustionNo + ". " + currentQustion.qustion;

    currentQustion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }   else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    qustionElement.innerHTML = `You scored ${score} out of ${qustions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQustionIndex++;
    if (currentQustionIndex < qustions.length) {
        showQustion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQustionIndex < qustions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();