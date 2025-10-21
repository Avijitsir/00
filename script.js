const questions = [
    {
      "question": "এক ব্যক্তি 2000 টাকা বার্ষিক 4% সরল সুদে একটি ব্যাঙ্কে জমা রাখলেন এবং অপর ব্যাঙ্কে 3000 টাকা বার্ষিক 14% সরল সুদে জমা রাখলেন। ওই ব্যক্তির মোটের ওপর সুদের হার কত?",
      "options": ["18%", "12%", "10%", "9%"],
      "answer": "10%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '1' থেকে- মোটের ওপর সুদের হার $ =\\frac{2000\\times4+3000\\times14}{2000+3000}=\\frac{50000}{5000}=10\\% $"
    },
    {
      "question": "এক ব্যক্তি 1350 টাকা বার্ষিক 5% সরল সুদে একটি ব্যাঙ্কে জমা রাখলেন এবং অপর ব্যাঙ্কে 1150 টাকা বার্ষিক 6% সরল সুদে জমা রাখলেন। ওই ব্যক্তির মোটের ওপর সুদের হার কত?",
      "options": ["5.40%", "6.40%", "5.46%", "11%"],
      "answer": "5.46%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '1' থেকে- মোটের ওপর সুদের হার $ =\\frac{1350\\times5+1150\\times6}{1350+1150}=\\frac{6750+6900}{2500}=\\frac{13650}{2500}=5.46\\% $"
    },
    {
      "question": "এক ব্যক্তি 4000 টাকা বার্ষিক 15% সরল সুদে একটি ব্যাঙ্কে জমা রাখলেন এবং অপর ব্যাঙ্কে 6000 টাকা বার্ষিক 16% সরল সুদে জমা রাখলেন। ওই ব্যক্তির মোটের ওপর সুদের হার কত?",
      "options": ["15.86%", "31%", "14.6%", "15.6%"],
      "answer": "15.6%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '1' থেকে- মোটের ওপর সুদের হার $ =\\frac{4000\\times15+6000\\times16}{4000+6000}=\\frac{60000+96000}{10000}=\\frac{156000}{10000}=15.6\\% $"
    },
    {
      "question": "রামবাবু একটি সমবায় ব্যাঙ্কে পৃথকভাবে 1350 টাকা এবং 1250 টাকা জমা রাখলেন। যদি 2 বছর পর ওই দুটি আসলের সুদের পার্থক্য 20 টাকা হয়, তবে ওই ব্যাঙ্কে বার্ষিক সুদের হার কত?",
      "options": ["5%", "10%", "6%", "8%"],
      "answer": "10%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '2' থেকে- বার্ষিক সুদের হার $ =\\frac{20\\times100}{(1350-1250)\\times2}=10\\% $"
    },
    {
      "question": "এক ব্যক্তি একটি ব্যাঙ্কে পৃথকভাবে 2764 টাকা এবং 2464 টাকা জমা রাখলেন। যদি 5 বছর পর ওই দুটি আসলের সুদের পার্থক্য 15 টাকা হয়, তবে ওই ব্যাঙ্কের বার্ষিক সুদের হার কত?",
      "options": ["2%", "2.5%", "4%", "1%"],
      "answer": "1%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '2' থেকে- বার্ষিক সুদের হার $ =\\frac{15\\times100}{(2764-2464)\\times5}=\\frac{15\\times100}{300\\times5}=1\\% $"
    },
    {
      "question": "এক ব্যক্তি একটি ব্যাঙ্কে পৃথকভাবে 1888 টাকা এবং 1763 টাকা জমা রাখলেন। যদি 4 বছর পর ওই দুটি আসলের সুদের পার্থক্য 25 টাকা হয়, তবে ওই ব্যাঙ্কের বার্ষিক সুদের হার কত?",
      "options": ["5%", "3%", "8%", "10%"],
      "answer": "5%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '2' থেকে- বার্ষিক সুদের হার $ =\\frac{25\\times100}{(1888-1763)\\times4}=\\frac{25\\times100}{125\\times4}=5\\% $"
    },
    {
      "question": "সুদের হার 4% বৃদ্ধি পাওয়ায় 300 টাকার সরল সুদ 15 টাকা বৃদ্ধি পায়। তবে সময় কত?",
      "options": ["$1\\frac{1}{4}$ বছর", "1 বছর", "$2\\frac{1}{4}$ বছর", "2 বছর"],
      "answer": "$1\\frac{1}{4}$ বছর",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '3' থেকে- নির্ণেয় সময় $ =\\frac{100\\times15}{300\\times4} $ বছর $ =\\frac{15}{12} $ বছর $ =\\frac{5}{4} $ বছর $ =1\\frac{1}{4} $ বছর।"
    },
    {
      "question": "সুদের হার 5% বৃদ্ধি পাওয়ায় 375 টাকার সরল সুদ 75 টাকা বৃদ্ধি পায়। তবে সময় কত?",
      "options": ["2 বছর", "8 বছর", "4 বছর", "কোনোটিই নয়"],
      "answer": "4 বছর",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '3' থেকে- নির্ণেয় সময় $ =\\frac{100\\times75}{375\\times5} $ বছর $ =4 $ বছর।"
    },
    {
      "question": "সুদের হার 4% বৃদ্ধি পাওয়ায় 1250 টাকার সরল সুদ 50 টাকা বৃদ্ধি পায়। তবে সময় কত?",
      "options": ["1 বছর", "1.5 বছর", "2 বছর", "1.25 বছর"],
      "answer": "1 বছর",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '3' থেকে- নির্ণেয় সময় $ =\\frac{100\\times50}{1250\\times4} $ বছর $ =1 $ বছর।"
    },
    {
      "question": "সুদের হার 4% বৃদ্ধি পাওয়ায় কোনো টাকার 3 বছরের সরল সুদ 600 টাকা বৃদ্ধি পায়। তবে আসল কত?",
      "options": ["5,000 টাকা", "4,000 টাকা", "6,000 টাকা", "3,000 টাকা"],
      "answer": "5,000 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '4' থেকে- আসল $ =\\frac{600\\times100}{3\\times4}=5,000 $ টাকা।"
    },
    {
      "question": "সুদের হার 5% বৃদ্ধি পাওয়ায় কোনো টাকার 5 বছরের সরল সুদ 500 টাকা বৃদ্ধি পায়। তবে আসল কত?",
      "options": ["2,500 টাকা", "2,000 টাকা", "1,500 টাকা", "1,800 টাকা"],
      "answer": "2,000 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '4' থেকে- আসল $ =\\frac{500\\times100}{5\\times5}=2,000 $ টাকা।"
    },
    {
      "question": "সুদের হার 4% বৃদ্ধি পাওয়ায় কোনো টাকার 6 বছরের সরল সুদ 960 টাকা বৃদ্ধি পায়। তবে আসল কত?",
      "options": ["3,000 টাকা", "3,500 টাকা", "4,000 টাকা", "4,500 টাকা"],
      "answer": "4,000 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '4' থেকে- আসল $ =\\frac{960\\times100}{6\\times4}=4,000 $ টাকা।"
    },
    {
      "question": "সুদের হার 5% হ্রাস পাওয়ায় কোনো টাকার 4 বছরের সরল সুদ 100 টাকা হ্রাস পায়। তবে আসল কত?",
      "options": ["500 টাকা", "5,000 টাকা", "400 টাকা", "4,000 টাকা"],
      "answer": "500 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '5' থেকে- আসল $ =\\frac{100\\times100}{4\\times5}=500 $ টাকা।"
    },
    {
      "question": "সুদের হার 7% হ্রাস পাওয়ায় কোনো টাকার 2 বছরের সরল সুদ 280 টাকা হ্রাস পায়। তবে আসল কত?",
      "options": ["1,500 টাকা", "1,800 টাকা", "2,800 টাকা", "2,000 টাকা"],
      "answer": "2,000 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '5' থেকে- আসল $ =\\frac{280\\times100}{2\\times7}=2,000 $ টাকা।"
    },
    {
      "question": "সুদের হার 2% হ্রাস পাওয়ায় কোনো টাকার 5 বছরের সরল সুদ 150 টাকা হ্রাস পায়। তবে আসল কত?",
      "options": ["1,000 টাকা", "1,500 টাকা", "1,800 টাকা", "2,000 টাকা"],
      "answer": "1,500 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '5' থেকে- আসল $ =\\frac{150\\times100}{5\\times2}=1,500 $ টাকা।"
    },
    {
      "question": "বার্ষিক 5% সরল সুদে কোনো নির্দিষ্ট সময়ে সুদ-আসল আসলের 6 গুণ হয়। তবে ওই নির্দিষ্ট সময়ে বার্ষিক সুদের হার কত হলে সুদ-আসল আসলের 12 গুণ হবে?",
      "options": ["10%", "12%", "9%", "11%"],
      "answer": "11%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '6' থেকে- সুদের হার $ =(\\frac{12-1}{6-1})\\times5\\%=\\frac{11}{5}\\times5\\%=11\\% $"
    },
    {
      "question": "বার্ষিক 2% সরল সুদে কোনো নির্দিষ্ট সময়ে সুদ-আসল আসলের 2 গুণ হয়। তবে ওই নির্দিষ্ট সময়ে বার্ষিক সুদের হার কত হলে সুদ-আসল আসলের 5 গুণ হবে?",
      "options": ["10%", "8%", "6%", "9%"],
      "answer": "8%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '6' থেকে- সুদের হার $ =(\\frac{5-1}{2-1})\\times2\\%=8\\% $"
    },
    {
      "question": "বার্ষিক 4% সরল সুদে কোনো নির্দিষ্ট সময়ে সুদ-আসল আসলের 3 গুণ হয়। তবে ওই নির্দিষ্ট সময়ে বার্ষিক সুদের হার কত হলে সুদ-আসল আসলের 6 গুণ হবে?",
      "options": ["10%", "12%", "8%", "কোনোটিই নয়"],
      "answer": "10%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '6' থেকে- সুদের হার $ =(\\frac{6-1}{3-1})\\times4\\%=10\\% $"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 5% সরল সুদে ব্যাঙ্ক থেকে কিছু টাকা ধার করেন। 6 বছর পর যদি মোট সুদ আসলের থেকে 350 টাকা কম হয়, তবে আসল কত?",
      "options": ["600 টাকা", "500 টাকা", "650 টাকা", "450 টাকা"],
      "answer": "500 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '7' থেকে- আসল $ =\\frac{350\\times100}{100-5\\times6}=500 $ টাকা।"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 4% সরল সুদে ব্যাঙ্ক থেকে কিছু টাকা ধার করেন। 4 বছর পর যদি মোট সুদ আসলের থেকে 336 টাকা কম হয়, তবে আসল কত?",
      "options": ["400 টাকা", "450 টাকা", "500 টাকা", "560 টাকা"],
      "answer": "400 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '7' থেকে- আসল $ =\\frac{336\\times100}{100-4\\times4}=\\frac{336\\times100}{84}=400 $ টাকা।"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 4% সরল সুদে ব্যাঙ্ক থেকে কিছু টাকা ধার করেন। 3 বছর পর যদি মোট সুদ আসলের থেকে 880 টাকা কম হয়, তবে আসল কত?",
      "options": ["1,000 টাকা", "1,250 টাকা", "1,100 টাকা", "1,200 টাকা"],
      "answer": "1,000 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '7' থেকে- আসল $ =\\frac{880\\times100}{100-3\\times4}=\\frac{880\\times100}{88}=1,000 $ টাকা।"
    },
    {
      "question": "বার্ষিক সুদের হার এবং সময় সমান হলে, 100 টাকার সরল সুদ যদি 9 টাকা হয়, তবে সুদের হার কত?",
      "options": ["3%", "4%", "1%", "2%"],
      "answer": "3%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '8' থেকে- সুদের হার $ =\\sqrt{\\frac{100\\times9}{100}}=3\\% $"
    },
    {
      "question": "বার্ষিক সুদের হার এবং সময় সমান হলে, 625 টাকার সরল সুদ যদি 100 টাকা হয়, তবে সুদের হার কত?",
      "options": ["5%", "4%", "3%", "4.5%"],
      "answer": "4%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '8' থেকে- সুদের হার $ =\\sqrt{\\frac{100\\times100}{625}}=\\frac{100}{25}=4\\% $"
    },
    {
      "question": "বার্ষিক সুদের হার এবং সময় সমান হলে, 729 টাকার সরল সুদ যদি 144 টাকা হয়, তবে সময় কত?",
      "options": ["$4\\frac{4}{9}$ বছর", "$4\\frac{1}{3}$ বছর", "$3\\frac{1}{3}$ বছর", "$9\\frac{1}{4}$ বছর"],
      "answer": "$4\\frac{4}{9}$ বছর",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '8' থেকে- নির্ণেয় সময় $ =\\sqrt{\\frac{100\\times144}{729}}=\\frac{120}{27}=\\frac{40}{9}=4\\frac{4}{9} $ বছর।"
    },
    {
      "question": "বার্ষিক সুদের হার এবং সময় সমান হলে, 225 টাকার সরল সুদ যদি 4 টাকা হয়, তবে সময় কত?",
      "options": ["1 বছর", "$2\\frac{1}{3}$ বছর", "$1\\frac{1}{3}$ বছর", "এর কোনোটিই নয়"],
      "answer": "$1\\frac{1}{3}$ বছর",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '8' থেকে- নির্ণেয় সময় $ =\\sqrt{\\frac{100\\times4}{225}}=\\frac{20}{15}=\\frac{4}{3}=1\\frac{1}{3} $ বছর।"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 5% সরল সুদে 5 বছরের জন্য কিছু টাকা ধার করেন। যদি ধার শোধ করার সময় তিনি সুদ বাবদ 100 টাকা দেন, তবে তিনি মোট কত টাকা শোধ করেছিলেন?",
      "options": ["400 টাকা", "500 টাকা", "550 টাকা", "এর কোনোটিই নয়"],
      "answer": "500 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '9' থেকে- সুদ-আসল $ =100\\times(1+\\frac{100}{5\\times5})=100\\times\\frac{125}{25}=500 $ টাকা।"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 3% সরল সুদে 6 বছরের জন্য কিছু টাকা ধার করেন। যদি ধার শোধ করার সময় তিনি সুদ বাবদ 144 টাকা দেন, তবে তিনি মোট কত টাকা শোধ করেছিলেন?",
      "options": ["1,044 টাকা", "844 টাকা", "1,144 টাকা", "944 টাকা"],
      "answer": "944 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '9' থেকে- সুদ-আসল $ =144\\times(1+\\frac{100}{3\\times6})=144\\times\\frac{118}{18}=944 $ টাকা।"
    },
    {
      "question": "এক ব্যক্তি বার্ষিক 5% সরল সুদে 3 বছরের জন্য কিছু টাকা ধার করেন। যদি ধার শোধ করার সময় তিনি সুদ বাবদ 150 টাকা দেন, তবে তিনি মোট কত টাকা শোধ করেছিলেন?",
      "options": ["1,150 টাকা", "1,250 টাকা", "1,050 টাকা", "1,350 টাকা"],
      "answer": "1,150 টাকা",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '9' থেকে- সুদ-আসল $ =150\\times(1+\\frac{100}{3\\times5})=150\\times\\frac{23}{3}=1,150 $ টাকা।"
    },
    {
      "question": "দুটি ভিন্ন ব্যাঙ্কে, পৃথক বার্ষিক সুদের হারের জন্য 750 টাকার 2 বছরের সুদের পার্থক্য হয় 90 টাকা। তবে ব্যাঙ্কদুটির বার্ষিক সুদের হারের পার্থক্য কত?",
      "options": ["4%", "6%", "8%", "এর কোনোটিই নয়"],
      "answer": "6%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '10' থেকে- বার্ষিক সুদের হারের পার্থক্য $ =\\frac{90\\times100}{750\\times2}=6\\% $"
    },
    {
      "question": "দুটি ভিন্ন ব্যাঙ্কে, পৃথক বার্ষিক সুদের হারের জন্য 200 টাকার 3 বছরের সুদের পার্থক্য হয় 60 টাকা। তবে ব্যাঙ্কদুটির বার্ষিক সুদের হারের পার্থক্য কত?",
      "options": ["5%", "7%", "10%", "2%"],
      "answer": "10%",
      "userAnswer": null, "status": null,
      "explanation": "সূত্র '10' থেকে- বার্ষিক সুদের হারের পার্থক্য $ =\\frac{60\\times100}{200\\times3}=10\\% $"
    }
];

// --- এই ফাইলের বাকি অংশ অপরিবর্তিত থাকবে ---
// The rest of the script is the same as the previous correct version.
// For brevity, only the changed part is shown above, but you should replace the entire file content.
// The corrected showExplanation function is below.

let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let userName = ''; 

// DOM Elements
const startScreen = document.getElementById('startScreen');
const nameInputScreen = document.getElementById('nameInputScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const nextToNameScreenButton = document.getElementById('nextToNameScreenButton');
const userNameInput = document.getElementById('userNameInput');
const startQuizButton = document.getElementById('startQuizButton');
const nameInputMessage = document.getElementById('nameInputMessage');
const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');
const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');
const showAnswerButton = document.getElementById('showAnswerButton');
const explanationModal = document.getElementById('explanationModal');
const explanationText = document.getElementById('explanationText');
const closeButton = document.querySelector('.close-button');

// --- Event Listeners ---
nextToNameScreenButton.addEventListener('click', showNameInputScreen);
startQuizButton.addEventListener('click', handleNameInputAndStartQuiz);
prevButton.addEventListener('click', handlePrevQuestion);
nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);
showAnswerButton.addEventListener('click', showExplanation);
closeButton.addEventListener('click', hideExplanation);
window.addEventListener('click', (event) => {
    if (event.target == explanationModal) {
        hideExplanation();
    }
});

// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showNameInputScreen() {
    startScreen.classList.remove('active');
    nameInputScreen.classList.add('active');
}

function handleNameInputAndStartQuiz() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName;
    nameInputScreen.classList.remove('active');
    quizScreen.classList.add('active');
    startQuiz();
}

function startQuiz() {
    questions.forEach(q => shuffleArray(q.options));
    resetQuizState();
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    questions.forEach(q => {
        q.userAnswer = null;
        q.status = null;
    });
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswered = currentQuestion.status !== null;

    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    questionTextBox.textContent = currentQuestion.question;

    if (window.MathJax) {
        MathJax.typesetPromise([questionTextBox]);
    }
    
    optionsContainer.innerHTML = '';
    
    questionTextBox.classList.remove('active');
    void questionTextBox.offsetWidth;
    questionTextBox.classList.add('active');

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        
        if (!isAnswered) {
            button.addEventListener('click', () => selectOption(button, option));
        } else {
            button.style.pointerEvents = 'none';
            if (option === currentQuestion.userAnswer) {
                button.classList.add('selected');
                if (currentQuestion.status === 'correct') button.classList.add('correct');
                else if (currentQuestion.status === 'wrong') button.classList.add('wrong');
            }
            if (option === currentQuestion.answer && currentQuestion.status !== 'correct') {
                button.classList.add('correct');
            }
        }
        
        optionsContainer.appendChild(button);
        if (window.MathJax) {
            MathJax.typesetPromise([button]);
        }
        setTimeout(() => {
            button.classList.add('active');
        }, index * 100);
    });

    // Button Visibility
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    showAnswerButton.style.display = 'inline-block';

    if (isAnswered) {
        skipButton.style.display = 'none';
        nextButton.style.display = 'inline-block';
        submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
        if (currentQuestionIndex === questions.length - 1) nextButton.style.display = 'none';
    } else {
        skipButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
        if (currentQuestionIndex === questions.length - 1) {
            skipButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
    }
}

function selectOption(selectedButton, selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.status !== null) return;
    
    Array.from(optionsContainer.children).forEach(opt => { opt.style.pointerEvents = 'none'; });

    const correctAnswer = currentQuestion.answer;
    currentQuestion.userAnswer = selectedAnswer;
    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        currentQuestion.status = 'correct';
    } else {
        selectedButton.classList.add('wrong');
        wrongCount++;
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.textContent === correctAnswer) btn.classList.add('correct');
        });
        currentQuestion.status = 'wrong';
    }

    scoreDisplayElem.textContent = score.toFixed(2);
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
    }
}

function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function handleNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.status === null) {
        skippedCount++;
        currentQuestion.status = 'skipped';
        currentQuestion.userAnswer = null;
    }
    if(currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        handleSubmitQuiz();
    }
}

function handleSkipQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    skippedCount++;
    currentQuestion.status = 'skipped';
    currentQuestion.userAnswer = null;
    
    if(currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        handleSubmitQuiz();
    }
}

function handleSubmitQuiz() {
    const lastQuestion = questions[questions.length - 1];
    if (lastQuestion.status === null) {
        lastQuestion.status = 'skipped';
        skippedCount++;
    }

    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const totalPossibleScore = questions.length;
    const yourPercentage = (questions.length > 0) ? (score / totalPossibleScore) * 100 : 0;

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    document.getElementById('yourPercentage').textContent = yourPercentage.toFixed(2) + '%';

    const percentageBarFill = document.getElementById('percentageBarFill');
    percentageBarFill.style.width = `${yourPercentage}%`;
    percentageBarFill.style.backgroundColor = yourPercentage >= 50 ? '#28a745' : '#dc3545';

    saveQuizResult();
    displayRankings();
}

/**
 * FINAL FIX: This function is updated to be more robust.
 * It waits for the browser to render the text before calling MathJax.
 */
function showExplanation() {
    const currentQuestion = questions[currentQuestionIndex];
    explanationText.innerHTML = currentQuestion.explanation; 
    explanationModal.style.display = 'block';

    // Use a short timeout to ensure the DOM is updated before MathJax runs
    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([explanationText])
                .catch((err) => console.error('MathJax Typeset Error:', err));
        }
    }, 0);
}


function hideExplanation() {
    explanationModal.style.display = 'none';
}

function saveQuizResult() {
    if (!userName) return;
    database.ref('quizResults/' + QUIZ_ID).push({
        name: userName,
        score: score.toFixed(2),
        correct: correctCount,
        wrong: wrongCount,
        skipped: skippedCount,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString()
    }).catch(error => console.error("Result save failed:", error));
}

function displayRankings() {
    const rankListElem = document.getElementById('rankList');
    rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড হচ্ছে...</li>';
    database.ref('quizResults/' + QUIZ_ID).once('value', snapshot => {
        const userHighestScores = {};
        snapshot.forEach(child => {
            const data = child.val();
            if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') return;
            const userScore = parseFloat(data.score);
            if (isNaN(userScore)) return;

            if (!userHighestScores[data.name] || userScore > userHighestScores[data.name].score) {
                userHighestScores[data.name] = { name: data.name, score: userScore };
            }
        });
        const rankings = Object.values(userHighestScores).sort((a, b) => b.score - a.score);
        rankListElem.innerHTML = '';
        if (rankings.length === 0) {
            rankListElem.innerHTML = '<li>এখনো কোনো র‍্যাঙ্কিং নেই।</li>';
        } else {
            rankings.forEach((entry, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${entry.name} - স্কোর: ${entry.score.toFixed(2)}`;
                rankListElem.appendChild(li);
            });
        }
    }).catch(error => {
        console.error("Ranking load failed:", error);
        rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড করা যায়নি।</li>';
    });
}

function displayDetailedQuestions(category) {
    const resultSummary = document.getElementById('resultSummary');
    const detailedAnswersContainer = document.getElementById('detailedAnswersContainer');
    const questionsList = document.getElementById('questionsList');
    const detailedAnswersTitle = document.getElementById('detailedAnswersTitle');
    
    resultSummary.style.display = 'none';
    detailedAnswersContainer.style.display = 'block';
    questionsList.innerHTML = '';

    let filteredQuestions = [];
    if (category === 'all') filteredQuestions = questions;
    else filteredQuestions = questions.filter(q => q.status === category);

    const titles = { all: 'সমস্ত প্রশ্ন ও উত্তর', correct: 'সঠিক উত্তরসমূহ', wrong: 'ভুল উত্তরসমূহ', skipped: 'বাদ পড়া প্রশ্নসমূহ' };
    detailedAnswersTitle.textContent = titles[category];

    if (filteredQuestions.length === 0) {
        questionsList.innerHTML = `<li>এই ক্যাটাগরিতে কোনো প্রশ্ন নেই।</li>`;
        return;
    }

    filteredQuestions.forEach(q => {
        const li = document.createElement('li');
        li.classList.add('detailed-question-item');
        
        const statusClasses = { correct: 'correct-status', wrong: 'wrong-status', skipped: 'skipped-status' };
        const statusTexts = { correct: ' (Correct)', wrong: ' (Wrong)', skipped: ' (Skipped)' };
        const statusClass = q.status ? statusClasses[q.status] : '';
        const statusText = q.status ? statusTexts[q.status] : '';
        const questionNumber = questions.indexOf(q) + 1;

        let optionsHtml = '';
        q.options.forEach(option => {
            let optClass = '';
            if (q.userAnswer === option) {
                optClass = q.status === 'correct' ? 'selected-correct' : 'selected-wrong';
            }
            if (option === q.answer && q.status !== 'correct') {
                optClass += ' correct-answer-highlight';
            }
            optionsHtml += `<li class="${optClass}">${option}</li>`;
        });

        li.innerHTML = `
            <div class="question-header">
                <span class="question-number">${questionNumber}.</span>
                <span class="question-text">${q.question}</span>
                <span class="status-indicator ${statusClass}">${statusText}</span>
            </div>
            <ul class="detailed-options">${optionsHtml}</ul>`;
        questionsList.appendChild(li);
        
        if (window.MathJax) {
            MathJax.typesetPromise([li]);
        }
    });
}

function backToSummaryScreen() {
    const resultSummary = document.getElementById('resultSummary');
    const detailedAnswersContainer = document.getElementById('detailedAnswersContainer');
    detailedAnswersContainer.style.display = 'none';
    resultSummary.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const showAllAnswersButton = document.getElementById('showAllAnswersButton');
    const showCorrectAnswersButton = document.getElementById('showCorrectAnswersButton');
    const showWrongAnswersButton = document.getElementById('showWrongAnswersButton');
    const showSkippedQuestionsButton = document.getElementById('showSkippedQuestionsButton');
    const backToResultsButton = document.getElementById('backToResultsButton');

    if(showAllAnswersButton) showAllAnswersButton.addEventListener('click', () => displayDetailedQuestions('all'));
    if(showCorrectAnswersButton) showCorrectAnswersButton.addEventListener('click', () => displayDetailedQuestions('correct'));
    if(showWrongAnswersButton) showWrongAnswersButton.addEventListener('click', () => displayDetailedQuestions('wrong'));
    if(showSkippedQuestionsButton) showSkippedQuestionsButton.addEventListener('click', () => displayDetailedQuestions('skipped'));
    if(backToResultsButton) backToResultsButton.addEventListener('click', backToSummaryScreen);
});