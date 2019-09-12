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

