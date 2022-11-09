const quizData = [
  {
    question:
      "Which operator returns true if the two compared values are not equal?",
    a: "<>",
    b: "~",
    c: "==!",
    d: "!==",
    correct: "d",
  },
  {
    question: "How is a forEach statement different from a for statement?",
    a: "Only a for statement uses a callback function.",
    b: "A for statement is generic, but a forEach statement can be used only with an array.",
    c: "Only a forEach statement lets you specify your own iterator.",
    d: " A forEach statement is generic, but a for statement can be used only with an array.",
    correct: "b",
  },
  {
    question: "Which keyword is used to create an error?",
    a: "throw",
    b: "exception",
    c: "catch",
    d: "error",
    correct: "a",
  },
  {
    question: `What will this code log to the console?
     const foo = [1, 2, 3]
     const [n] = foo console.log(n)`,
    a: "1",
    b: "undefined",
    c: "NaN",
    d: " Nothing--this is not proper JavaScript syntax and will throw an error.",
    correct: "a",
  },
  {
    question: `What is the difference between the map() and the forEach() methods on the Array prototype?`,
    a: "There is no difference.",
    b: "The forEach() method returns a single output value, whereas the map() method performs operation on each value in the array.",
    c: "The map() methods returns a new array with a transformation applied on each item in the original array, whereas the forEach() method iterates through an array with no return value.",
    d: "The forEach() methods returns a new array with a transformation applied on each item in the original array, whereas the map() method iterates through an array with no return value.",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerElements.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answerEl;

  answerElements.forEach((answer) => {
    if (answer.checked) {
      answerEl = answer.id;
    }
  });

  return answerEl;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score === quizData.length) {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly. Congratulations :)</h2>
        
        <button onClick="location.reload()">Reload</button>`;
      } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onClick="location.reload()">Reload</button>
        `;
      }
    }
  }
});
