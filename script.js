//=========Daftar========//
function toggleLoginPopup() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = (loginPopup.style.display === "none" || loginPopup.style.display === "") ? "flex" : "none";
}

function registerUser(event) {
    event.preventDefault(); 
    toggleLoginPopup();
}

//=======Login PopUp======//
function toggleLoginPopup() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = (loginPopup.style.display === "none" || loginPopup.style.display === "") ? "flex" : "none";
}

function loginUser(event) {
    event.preventDefault(); 

    toggleLoginPopup();
}

//==========home==========//
//**video**
const slide = document.querySelector(".slide");
const arrowBtns = document.querySelectorAll(".video-materi i");
const firstCardWidth = slide.querySelector(".card").offsetWidth;

let isDragging = false, startX, startSrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slide.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; 
    })
});

const dragStart = (e) => {
    isDragging = true;
    slide.classList.add("dragging");
    startX = e.pageX;
    startSrollLeft = slide.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    slide.scrollLeft = startSrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    slide.classList.remove("dragging");
}

slide.addEventListener("mousedown", dragStart);
slide.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//====Materi====//
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = (dropdownContent.style.display === "none" || dropdownContent.style.display === "") ? "block" : "none";
}

//===Materi Open===//
function showMateri(materiNumber) {
    var materiElements = document.querySelectorAll('.materi');
    
    for (var i = 0; i < materiElements.length; i++) {
        materiElements[i].classList.remove('active');
    }

    var selectedMateri = document.getElementById('materi' + materiNumber);
    selectedMateri.classList.add('active');
}

//===SOAL OPEN===//
const questions = [
    {
        question: "Apa itu UMKM?",
        options: ["Jualan", "Toko", "Kegiatan", "Pasar"],
        correctAnswer: "Jualan"
    },
];

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = currentQuestion.question;

    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        const label = document.createElement("label");
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${option}`));
        answerContainer.appendChild(label);
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer.value === currentQuestion.correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
    }
}

// Initial question display
showQuestion();
