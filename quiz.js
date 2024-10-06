
function checkAnswer() {
    
    let correctAnswer="4";

    document.querySelector('quiz');

    let userAnswer=userAnswerElement.value;

    if (userAnswer===correctAnswer){
        document.getElementById('feedback ').textContent="Correct! Well done.";
    }else{
        document.getElementById('feedback ').textContent="That's incorrect. Try again!";
    }
}