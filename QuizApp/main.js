const quizData = [
  {
    question: "what is your name",
    a: "abass",
    b: "rashid",
    c: "hassan",
    d: "abdi",
    correct: "a",
  },
  {
    question: "How old are you",
    a: 20,
    b: 32,
    c: 23,
    d: 25,
    correct: "d",
  },
  {
    question: "who is the current perisedent of kenya",
    a: "moi kibaki",
    b: "raila oding",
    c: "uhuru kenyatta",
    d: " ruto",
    correct: "c",
  },
  {
    question: "best university in kenya",
    a: "kirinyaga university",
    b: "university of nairobi",
    c: "moi university",
    d: "kenyatta university",
    correct: "a",
  },
  {
    question: "Abass best friends",
    a: "jafar ibrahim",
    b: "ahmed dakane",
    c: "abdullahi bute",
    d: "abdikani gacal",
    correct: "a",
  },
];

const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.querySelector("button");

let currentQuiz = 0;
let score = 0;
function loadQuiz() {
  deSelectAnswer();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelectAnswer() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelectAnswer();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 1;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEl.innerHTML = `<h3>You answered ${score} / ${quizData.length} questions.</h3>
      <button onclick="location.reload()">Resatrt</button>`;
    }
  }
});
