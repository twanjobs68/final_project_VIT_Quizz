
console.log("running app.js")
function check() {
console.log("inside function check")
    var numCorrect=0;
    //variable for each question
    var q1=document.myQuiz.question1.value;
    var q2=document.myQuiz.question2.value;
    var q3=document.myQuiz.question3.value;
    var q4=document.myQuiz.question4.value;
    var q5=document.myQuiz.question5.value;
    var q6=document.myQuiz.question6.value;
    var q7=document.myQuiz.question7.value;
    var q8=document.myQuiz.question8.value;
    var q9=document.myQuiz.question9.value;
    var q10=document.myQuiz.question10.value;
    var result=document.getElementById('result');
    var myQuiz = document.getElementById("myQuiz");


    if(q1 == "12:30pm-1pm") {
        c++;
    }
    if(q2 == "Salmon") {
        c++;
    }
    if(q3 == "7am") {
        c++;
    }
    if(q4 == "legumes") {
        c++;
    }
    if(q5 == "Spring") {
        c++;
    }
     if(q6 == "Ameythyst") {
         c++;
     }
     if(q7 == "Boss Baby") {
         c++;
     }
     if(q8 == "Venom") {
         c++;
     }
     if(q9 == "Lemons") {
         c++;
     }
     if(q10 == "Niagara Falls") {
         c++;
     }
        myQuiz.style.dispaly="none";
        
       if(c < 5){
           alert("Please Google More! " + c)
       } else{
           alert("Not Bad at All!!" + c)
        }      
        console.log(c);
     
      
    }

    


