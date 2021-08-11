
console.log("running app.js")
function check() {
    console.log("inside function check")
    var numCorrect = 0;
    //variable for each question
    var q1 = document.myQuiz.question1.value;
    var q2 = document.myQuiz.question2.value;
    var q3 = document.myQuiz.question3.value;
    var q4 = document.myQuiz.question4.value;
    var q5 = document.myQuiz.question5.value;
    var q6 = document.myQuiz.question6.value;
    var q7 = document.myQuiz.question7.value;
    var q8 = document.myQuiz.question8.value;
    var q9 = document.myQuiz.question9.value;
    var q10 = document.myQuiz.question10.value;
    var result = document.getElementById('result');
    var myQuiz = document.getElementById("myQuiz");


    if (q1 == "12:30pm-1pm") {
        numCorrect;
    }
    if (q2 == "Salmon") {
        numCorrect;
    }
    if (q3 == "7am") {
        numCorrect;
    }
    if (q4 == "legumes") {
        numCorrect;
    }
    if (q5 == "Spring") {
        numCorrect;
    }
    if (q6 == "Ameythyst") {
        numCorrect;
    }
    if (q7 == "Boss Baby") {
        numCorrect;
    }
    if (q8 == "Venom") {
        numCorrect;
    }
    if (q9 == "Lemons") {
        numCorrect;
    }
    if (q10 == "Niagara Falls") {
        numCorrect;
    }
    myQuiz.style.dispaly = "none";

    let totalScore = 100 * numCorrect;
    if (totalScore <= 50) {

        alert("Needs Work! Please Google More! Your total correct is " + numCorrect + " out of 10, for a Score of " + totalScore + "%")
    } else {
        if (totalScore > 50 && totalScore < 70) {
            alert("Not Bad! Could use some more google time! Your Score is " + numCorrect + " out of 10, for a Score of " + totalScore + "%")
        }
        else {
            if (totalScore > 70) {
                alert("GREAT JOB! Your Score is " + numCorrect + " out of 10, for a Score of " + totalScore + "%")
            }
        } console.log(numCorrect);

    }
}




