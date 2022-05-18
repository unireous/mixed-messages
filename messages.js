let answer = ['yes', 'no', 'definitely', 'FUCK YOU'];

let randomAnswer = answer[Math.floor(Math.random() * answer.length)];

document.getElementById("bigAnswer").innerHTML = randomAnswer;


 let  answerBlock = document.getElementById("answer")

var form = document.getElementById("myForm");


function handleForm(event) { 
    event.preventDefault(); 
    answerBlock.style.visibility = "visible" } 


form.addEventListener('submit', handleForm);