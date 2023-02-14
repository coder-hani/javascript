// Array of questions and answers
let questions = [{
    question: 'What is 2 + 2?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 2,
  },
  {
    question: "The tallest building in the world is located in which city?",
    choice1: "Dubai",
    choice2: "New York",
    choice3: "Shanghai",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "What percent of American adults believe that chocolate milk comes from brown cows?",
    choice1: "20%",
    choice2: "18%",
    choice3: "7%",
    choice4: "33%",
    answer: 3,
  },
  {
    question: "Approximately what percent of U.S. power outages are caused by squirrels?",
    choice1: "10-20%",
    choice2: "5-10%",
    choice3: "15-20%",
    choice4: "30%-40%",
    answer: 1,
  }
]

let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = [] // Store Questins in this array
let currentQuestion = {} // Question displayed in our quiz
const question = document.querySelector('#question'); // Constant for the question that we wanna diplay
const start = document.getElementById("start-btn") // Start button to begin quiz
start.addEventListener('click', startGame) // Adding a click event tp start our quiz
const choices = Array.from(document.querySelectorAll('.choice-text')); // An array for our choices for each question
const progressBarFull = document.querySelector('#progressBarFull');
const MAX_QUESTIONS = 4 // constant for the number of questions



// Function to start out game when pressing start
function startGame() {
  questionCounter = 0 // before our first question we have number 0
  availableQuestions = [...questions] // storing our questions and answers in new array
  getNewQuestion() // calling the function to set a new question
  start.hidden = true // adding hidden display attribut to start button
}

// Function to get the next question after choosing an answer for the current question
function getNewQuestion() {
  questionCounter++ // first question is number 1
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // rounding up number of question to lowest nearest number

  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` // add width to the bar after answering questions

  currentQuestion = availableQuestions[questionsIndex] // getting the question that we wanna display 
  question.innerText = currentQuestion.question // display the question by changing the inner text of the constant question

  // displaying our choicces in the choices buttons with the data type number that we used in our html
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  // deleting the question that we answered from the array
  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

//selecting answers to our question
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target // user selected
    const selectedAnswer = selectedChoice.dataset['number'] //user selected

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    // applying class correct or incorrect to our selected answer 


    selectedChoice.parentElement.classList.add(classToApply)

    // removing our green or red colors after answering our question to move to the next question 
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()

    }, 1000)
  })
})