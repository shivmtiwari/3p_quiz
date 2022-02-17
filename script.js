//Function to count correct answers and print results to document 
function myFunction() {

  //Create variable to count correct answers 
  var correctAnswers = 0;

  var q2 = document.getElementById("q2a").checked;
  var q4 = document.getElementById("q4a").checked;
  var q7 = document.getElementById("q7c").checked;
  var q10 = document.getElementById("q10d").checked;
  var q11 = document.getElementById("q11b").checked;
  var q13 = document.getElementById("q13b").checked;
  var q15 = document.getElementById("q15a").checked;
  var q16 = document.getElementById("q16d").checked;
  var q18 = document.getElementById("q18a").checked;
 



  //Assign correct answers to field inputs
  
  if (q2) {
      correctAnswers += 1;
  } 

  if (q4) {
      correctAnswers += 1;
  }
 
  if (q7) {
      correctAnswers += 1;
  } 
   
  if (q10) {
      correctAnswers += 1;
  } if (q11) {
      correctAnswers += 1;
  } 

   
  if (q13) {
      correctAnswers += 1;
  }  
    
  if (q15) {
      correctAnswers += 1;
  }  if (q16) {
      correctAnswers += 1;
  }  
   
  if (q18) {
      correctAnswers += 1;
  }  
 

       //Print results (and statement) to document, dependant on outcome
       if (correctAnswers === 4) {
      document.getElementById("result").innerHTML = "You Should Take ";}
  else if (correctAnswers >= 15) {
      document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
  else if (correctAnswers >= 10) {
      document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
  else if (correctAnswers >= 1) {
      document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
  else if (correctAnswers === 1) {
      document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
  else if (correctAnswers === 0) {
      document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

      //Print correct answers to form
      // document.getElementById("answers").innerHTML = "Correct answers: (1)China (2)Chile (3)Victoria (4)Canberra (5)Florida (6)Tangent (7)Triskaidecagon (8)5 (9)90 (10)150 (11)Bromine (12)Salt (13)deliquescence (14)Aluminium (15)Hydrogen (16)1914 (17)Austria (18)Dallas (19)France (20)10";

      document.getElementById("answers").innerHTML = "Book Slot";

      //Reset contents of form
      document.getElementById("quiz-form").reset();
}


