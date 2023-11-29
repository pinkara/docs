const questions = [

{
    question: "この植物は何ですか？",
    img: "fujibakama.jpg",
    name: "ふじばかま"
},
{
    question: "この植物は何ですか？",
    img: "akaza.jpg",
    name: "あかざ"
},
{
    question: "この植物は何ですか？",
    img: "kiku.jpg",
    name: "きく"
},
{
    question: "この植物は何ですか？",
    img: "shida.jpg",
    name: "しだ"
},
];

let currentQuestion = 0;
let score = 0;

const quizzImg = document.querySelector('#quizz-img');
const quizzQuestion = document.querySelector('#quizz-question');
const inputResultat = document.querySelector('#resultat');
const btnNext = document.querySelector('#next');
const resultatfinal = document.querySelector('#resultatfinal');

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const shuffledQuestions =shuffle(questions);

quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;


function validation(){
    if(inputResultat.value.toLowerCase() === shuffledQuestions
    [currentQuestion].name.toLowerCase()){
        score++;
    }

    currentQuestion++;

    if(currentQuestion === shuffledQuestions.length){
        quizzQuestion.textContent = "Fin du quizz";
        quizzImg.style.display = "none"
        inputResultat.style.display = "none"
        btnNext.style.display = "none"
        resultatfinal.textContent = `Votre score est de ${score} sur ${shuffledQuestions.length}`;
    }else{
        quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
        quizzQuestion.textContent = shuffledQuestions[currentQuestion].
        question;
        inputResultat.value =""
    }
};

btnNext.addEventListener('click', validation)


inputResultat.addEventListener('keyup', (event) => {
    if(event.key ==="Enter"){
        validation()
    }
})
