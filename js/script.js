function submitAnswers() {
    let total = 5;
    let score = 0;

    //questionAnsweredVal retrives the values that the user submits. it is a template
    const questionAnsweredVal = questionNumber => document.forms["quiz-form"][`q${questionNumber}`].value;

    const questionUserAnswered = [];
    //Will create 3 new instances and push to the array. Uses questionAnswerVal (explained above)
    for(i=1; i <= 3; i++){
        questionUserAnswered.push(questionAnsweredVal(i))
    }
    // If an question is unanswered then an alert will pop up.
     questionUserAnswered.forEach((userAnswer, i) => {
        !userAnswer && alert(`You missed question ${1+i}`);
     });

}

