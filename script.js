const quizDB = [
{
   
    question: "Q1: which language runs in web browser",
    a: "java",
    b: "python",
    c: "javascript",
    d: "c++",
    ans: "ans3"
   
     
},
{
    question: "Q2: what is the full form of HTML",
    a: "Hello to my land",
    b: "Hey Text Markup Language",
    c: "Hypertext markup Language",
    d: "HyperText markup Language",
    ans: "ans3" 
},
{
    question: "Q3: what is the full for of CSS",
    a: "cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1" 
},
{
    question: "Q4: what is the full form of js",
    a: "JavaScript",
    b: "Javasuper",
    c: "Justscript",
    d: "Jordenshoes",
    ans: "ans1" 
},
{
    question: "Q5: How is Father of Computer?",
    a: "James Goling",
    b: "Charles Babbage",
    c: "Dennis Ritchie",
    d: "Bjarne stroustrup",
    ans: "ans2" 
},
{
    question: "Q6: what is the full form of CPU",
    a: "Computer Processing Unit",
    b: "Computer Principal Unit",
    c: "Central processing Unit",
    d: "Control Processing Unit",
    ans: "ans3" 
},
{
    question: "Q7: Which of the following language computer understand?",
    a: "C language",
    b: "Assembly language",
    c: "Binary language",
    d: "Basic",
    ans: "ans3" 
},
{
    question: "Q8: Which of the following computer language is written in binary codes only?",
    a: "Pascal",
    b: "Machine language",
    c: "C",
    d: "C#",
    ans: "ans2" 
},
{
    question: "Q9: Which of the following Brain of the Computer?",
    a: "Central processing unit",
    b: "Memory",
    c: "Arithmetic and logic unit",
    d: "Control Unit",
    ans: "ans1" 
},
{
    question: "Q10: Which of the following is not a characteristic of a computer?",
    a: "Versatility",
    b: "Accuracy",
    c: "Diligence",
    d: "I.Q",
    ans: "ans4" 
},
{
    question: "Q11: Which of the following is the smallest unit of data in a computer?",
    a: "Bit",
    b: "KB",
    c: "Nibble",
    d: "Byte",
    ans: "ans1" 
},
{
    question: "Q12: Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
    a: "Output unit",
    b: "Input unit",
    c: "Memory Unit",
    d: "Arithmeticcand logic Unit",
    ans: "ans2" 
},
{
    question: "Q13: Which of the following monitor looks like a television and are normally used with non-portable computer system?",
    a: "LED",
    b: "LCD",
    c: "CRT",
    d: "Flat Panel Monitors",
    ans: "ans3" 
},
{
    question: "Q14: Which of the following is not a type of computer code?",
    a: "EDIC",
    b: "ASCII",
    c: "BCD",
    d: "EBCDIC",
    ans: "ans1" 
},
{
    question: "Q15: Which of the following device use positional notation to represent a decimal number?",
    a: "Pascaline",
    b: "Abacus",
    c: "Computer",
    d: "Calculator",
    ans: "ans2" 
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer');

const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = ()=> {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans){
      score++;

  };
  questionCount++;

  if(questionCount < quizDB.length){
    loadQuestion();

  }else{
    showScore.innerHTML = `
    <h3>
    Your Score is ${score}/${quizDB.length} 
     </h3>
     <button class="btn" onclick="location.reload()" > Play Again </button>

    `;
    showScore.classList.remove('ScoreArea');

  }

});