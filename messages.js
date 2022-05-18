let answer = ['yes', 'no', 'definitely', 'FUCK YOU'];

let randomAnswer = answer[Math.floor(Math.random() * answer.length)];

console.log(randomAnswer); 
document.getElementById("bigAnswer").innerHTML = randomAnswer;

//let submission = document.getElementById('submit');

//submission.onclick = function() {
    //submission.style.display = "block";
//}

let submission = function() {
    document.getElementById("answer").style.display = "block";
}

submit.onClick = submission;