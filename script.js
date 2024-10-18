const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


let checkboxFlag = document.getElementById('checkboxFlag')
let linkRiferimento = "./domPage.html";

function proceedBtn() {
  if (checkboxFlag.checked) {
    window.location.href = linkRiferimento;
  } else {
    alert("Please check the checkbox to proceed.");
  }
}

let contatore = 0;
let contatoreSbagliate = 0;
let currentQuestionIndex = 0;

let questionsRandomized = shuffle(questions)
console.log(questionsRandomized)


//FUNZIONE DI GESTIONE DOMANDE 
function quizzone() {
  if (currentQuestionIndex >= questionsRandomized.length) {
    /*  window.location.href = linkFinale; */

    let contatori = [contatore, contatoreSbagliate]
    return contatori
  }
  let contatore = contatori[0]
  let contatoreSbagliate = contatori[1]


  let currentQuestion = questionsRandomized[currentQuestionIndex];
  let answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];


  answers = shuffle(answers);
  console.log(answers)

  document.getElementById("question").innerText = currentQuestion.question;
  let buttonContainer = document.getElementById("contenitoreButtoni");
  buttonContainer.innerHTML = '';

  for ( i = 0; i < answers.length; i++){
    let buttone = document.createElement("button");
    buttone.innerText = answers[i];
    buttone.className = "Btn";

    buttone.addEventListener("click", function() { checkAnswer(answers[i], currentQuestion.correct_answer);});

    buttonContainer.appendChild(buttone);
  }

    /*let buttone = document.createElement("button");
    buttone.innerText = "Conferma";
    buttone.className = "Btn";
    buttonContainer.appendChild(buttone);
    buttone.addEventListener("click", function() { quizzone();});*/

  /*btn1.innerText = answers[0];
  btn2.innerText = answers[1];
  btn3.innerText = answers[2]; 
  btn4.innerText = answers[3];


  btn1.onclick = () => checkAnswer(answers[0], currentQuestion.correct_answer);
  btn2.onclick = () => checkAnswer(answers[1], currentQuestion.correct_answer);
  btn3.onclick = () => checkAnswer(answers[2], currentQuestion.correct_answer);
  btn4.onclick = () => checkAnswer(answers[3], currentQuestion.correct_answer);*/

  currentQuestionIndex++;

}


function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {

    contatore++;
  } else {
    contatoreSbagliate++;
  }
  console.log(contatore)
  console.log(contatoreSbagliate)
  quizzone()
}


quizzone();
/*
//PAGINA PRINCIPALE - FUNZIONE PER PROCEDERE ALLE DOMANDE
let checkboxFlag = document.getElementById('checkboxFlag')
let linkRiferimento = "./domPage.html";
let linkFinale = "./paginaFinale.html"
function proceedBtn() {
  if (checkboxFlag.checked) {
    window.location.href = linkRiferimento;

  } else {
    alert("Please check the checkbox to proceed.");
  }
}

let risposteGiuste = [];



function questionario() {

}


function mescolaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Genera un numero casuale tra 0 e i (compresi)
    const j = Math.floor(Math.random() * (i + 1));
    // Scambia gli elementi in posizione i e j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}