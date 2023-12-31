const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'sin 0°',
        choice1: '0',
        choice2: '1',
        choice3: '0.5',
        choice4: '√2/2',
        answer: 1,
    },
    {
        question: 'sin 30°',
        choice1: '0.25',
        choice2: '√3/2',
        choice3: '√3/2',
        choice4: '0.5',
        answer: 4,
    },
    {
        question: 'sin 45°',
        choice1: '√2/2',
        choice2: '1/2',
        choice3: '1',
        choice4: '0.7',
        answer: 1,
    },
    {
        question: 'sin 60°',
        choice1: '√3/2',
        choice2: '√3/3',
        choice3: '0.5',
        choice4: '0.8',
        answer: 1,
    },
    {
        question: 'sin 90°',
        choice1: '1',
        choice2: '0',
        choice3: '√2/1',
        choice4: '1/√2',
        answer: 1,
    },
    {
        question: 'sin 120°',
        choice1: '√2/3',
        choice2: '0.8',
        choice3: '√3/2',
        choice4: '√2',
        answer: 3,
    },
    {
        question: 'sin 135',
        choice1: '2/√2',
        choice2: '-√2/4',
        choice3: '√2/2',
        choice4: '√2/3',
        answer: 3,
    },
    {
        question: 'sin 150°',
        choice1: '2/√5',
        choice2: '-√2/4',
        choice3: '0.25',
        choice4: '1/2',
        answer: 4,
    },
    {
        question: 'sin 180°',
        choice1: '0',
        choice2: '√2/√3',
        choice3: '1',
        choice4: '0.5',
        answer: 1,
    },
    {
        question: 'sin',
        choice1: 'adjacent/opposé',
        choice2: 'opposé/hypoténuse',
        choice3: 'adjacent/hypoténuse',
        choice4: 'hypoténuse/opposé',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()