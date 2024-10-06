
function checkAnswer() {
    
    let correctAnswer="4";

    document.querySelector('quiz');

   
    let radioValue = document.querySelector('input[name="quiz"]:checked');

   
    if (radioValue) {
        let userAnswer = radioValue.value; 
        
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "Incorrect. Please try again.";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);




