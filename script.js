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

//PAGINA PRINCIPALE - FUNZIONE PER PROCEDERE ALLE DOMANDE
let checkboxFlag = document.getElementById('checkboxFlag')
let linkRiferimento = "./domPage.html";

function proceedBtn() {
  if (checkboxFlag.checked) {
    window.location.href = linkRiferimento;

  } else {
    alert("Please check the checkbox to proceed.");
  }
}

let risposteGiuste = [];
let contatore = 0;
let btn1 = document.getElementById("btnAnswer1")
let btn2 = document.getElementById("btnAnswer2")
let btn3 = document.getElementById("btnAnswer3")
let btn4 = document.getElementById("btnAnswer4")

function questionario() {
  for (let i = 0; i < questions.length; i++) {
    let giusta = questions[i].correct_answer
    risposteGiuste.push(giusta)
  }
  console.log(risposteGiuste);
}
/* console.log(questionario()); */
let array10Risposte = []
let array4Risposte = []
function risposte() {
  for (let j = 0; j < questions.length; j++) {
    array4Risposte.push({
      correct_answer: questions[j].correct_answer,
      incorrect_answers: questions[j].incorrect_answers,
      question: questions[j].question
    });
  }
  for (let i = 0; i < array4Risposte.length; i++) {
    array10Risposte.push(array4Risposte[i])
    /* array4Risposte = [] */
  }
  return array10Risposte
  let domandeQuiz = document.getElementById("question")
  domandeQuiz.innerText=array4Risposte.question
  
}

console.log(risposte(array10Risposte))



// Mescola un array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Genera un numero casuale tra 0 e i (compresi)
    const j = Math.floor(Math.random() * (i + 1));
    // Scambia gli elementi in posizione i e j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffle(array4Risposte))

function quizzone(){
  
  for(let i=0; i<array10Risposte.length; i++){
    for (let j=0; j<array4Risposte.length; j++){
      // let risposteNew = array4Risposte[j];
    
    btn1.innerText = array4Risposte[j].incorrect_answers[0]
    btn2.innerText = array4Risposte[j].incorrect_answers[1]
    btn3.innerText = array4Risposte[j].incorrect_answers[2]
    btn4.innerText = array4Risposte[i].correct_answer

    if (btn1.value=="undefined" || btn2.value=="undefined" || btn3.value=="undefined" || btn4.value=="undefined"){
      
      let no_result = document.getElementById("btn2")
     no_result.style.display="none"
      // btn2.style.display="none"
      // btn3.style.display="none"
      // btn4.style.display="none"

    }
  
    shuffle(array4Risposte)
  }
}


  

}


// Mostra una domanda e le risposte
/* function showQuestion(questionIndex) {
  const question = questions[questionIndex];
  const answers = [...question.incorrect_answers, question.correct_answer];
  shuffle(answers);

  document.getElementById('question').innerText = question.question;
  const buttons = document.querySelectorAll('.answer-button');
  buttons.forEach((button, index) => {
    button.innerText = answers[index];
    button.onclick = () => checkAnswer(answers[index], question.correct_answer, questionIndex);
  });
}

function checkAnswer(selectedAnswer, correctAnswer, questionIndex) {
  if (selectedAnswer === correctAnswer) {
    alert('Corretto!');
  } else {
    alert('Sbagliato!');
  }
  if (questionIndex < questions.length - 1) {
    showQuestion(questionIndex + 1);
  } else {
    alert('Questionario completato!');
  }
}
 */

/* function ricerca() {


  let titleInput = document.getElementById('ricercaTitolo').value
  let locationInput = document.getElementById('ricercaLuogo').value

  divVuoto.innerHTML = '';
  let result = [];

  if (titleInput === '' && locationInput === '') {
      alert('Inserisci dei valori nel campo di ricerca')
      return
  }

  for (i = 0; i < jobs.length; i++) {
      if (jobs[i].title.toLowerCase().includes(titleInput.toLowerCase()) && jobs[i].location.toLowerCase().includes(locationInput.toLowerCase())) {
          result.push(jobs[i])
      }

  }
  count = result.length

  divVuoto.innerHTML = '<h2> Risultati Trovati:' + count + '</h2>'



  if (count > 0) {

      let table = document.createElement('table');

      let header = document.createElement('tr');

      let thTitle = document.createElement('th');
      let thLocation = document.createElement('th');

      thTitle.textContent = 'Offerta';
      thLocation.textContent = 'Luogo';

      header.appendChild(thTitle);
      header.appendChild(thLocation);
      table.appendChild(header);

      for (i = 0; i < result.length; i++) {
          let riga = document.createElement('tr');
          let cellaTitolo = document.createElement('td');
          let cellaLuogo = document.createElement('td');
          cellaTitolo.textContent = result[i].title;
          cellaLuogo.textContent = result[i].location;

          riga.appendChild(cellaTitolo);
          riga.appendChild(cellaLuogo);
          table.appendChild(riga);
      }

      divVuoto.appendChild(table);
  }
  else {
      let no_result = document.createElement('p')
      no_result.style.color = "azure"
      no_result.textContent = "Non ci sono risultati"
      divVuoto.appendChild(no_result)
  }

  document.getElementById('ricercaTitolo').value = '';
  document.getElementById('ricercaLuogo').value = '';

  return { result, count }


}


/*function mescolaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Genera un numero casuale tra 0 e i (compresi)
    const j = Math.floor(Math.random() * (i + 1));
    // Scambia gli elementi in posizione i e j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}*/ 