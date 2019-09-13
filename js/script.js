function submitAnswers() {
    let score = 0;
    const answers = ["d", "b", "c"];
    const numQuest = answers.length;

    //questionAnsweredVal retrives the values that the user submits. it is a template
    const questionAnsweredVal = questionNumber => document.forms["quiz-form"][`q${questionNumber}`].value;

    const questionUserAnswered = [];
    // Will create 3 new instances and push to the array. Uses questionAnswerVal (explained above)
    for(i=1; i <= numQuest; i++){
        questionUserAnswered.push(questionAnsweredVal(i));
    }
    // If an question is unanswered then an alert will pop up.
     questionUserAnswered.forEach((userAnswer, i) => {
        if(!userAnswer) {
          return alert(`You missed question ${1+i}`);
        }
     });

     answers.forEach((answer, i) => {
        answer === questionUserAnswered[i] && score++;
     });

     // Display Results
     let result = document.getElementById('result');
     result.innerHTML = `<h3>You got <span>${score}</span> out of <span>${numQuest}</span> correct!</h3>`
    //  alert(`Your score: ${score} out of ${numQuest}`);
     return false;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("test");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
   
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

