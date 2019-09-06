function submitAnswers() {
    let total = 5;
    let score = 0;

    //Questions
    const createQuestionData = questionNumber => document.forms["quiz-form"][`q${questionNumber}`].value;
    const q1 = createQuestionData(1);

    !q1 ? alert('missed') : alert(q1);
}