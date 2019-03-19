/* Define Global Variables */
var memArr =[],
usrArr = [],
score = 0;
var counter = 0;

/* Chooses a new button based on current time (i.e randomly) */
function chooseNew(){
  var seconds = (new Date().getTime()) % 4;
  memArr.push(seconds);
}

/* Update Score */
function updateScore(){
  score++;
  document.getElementById("score").innerHTML="Score: "+ score;
}

/* Tests the user input with the generated values */
function test(){
  for(var j =0; j<memArr.length; j++){
    if(memArr[j] != usrArr[j]){
      document.getElementById("update").innerHTML = "You lose, please try again!"
      score = 0;
      memArr.length = 0;
      usrArr.length = 0;

      document.getElementById("score").innerHTML="Score: 0";

      document.getElementById("start").innerHTML = "Start";
      document.getElementById("start").onclick= startGame;  

      return 0;
    }
  }
  updateScore();
  document.getElementById("update").innerHTML = "Level " + (score+1);
  startGame();
  usrArr.length = 0;
}

/* Recreates the old values (Simon rules) */
function flashVals(val){
  switch(val){ //blue button
    case 0:
        document.getElementById("blue").className = "button blue select";
        setTimeout(function(){document.getElementById("blue").className = "button blue"}, 800);
    break;

    case 1: //red button
        document.getElementById("red").className = "button red select";
        setTimeout(function(){document.getElementById("red").className = "button red"}, 800);
    break;

    case 2: //green button
      document.getElementById("green").className = "button green select";
      setTimeout(function(){document.getElementById("green").className = "button green"}, 800);
    break;

    case 3: //yellow button
        document.getElementById("yellow").className = "button yellow select";
        setTimeout(function(){document.getElementById("yellow").className = "button yellow"}, 800);
    break;
    
    default:
    return 0; 
  }
}

/******************* INITIALIZES GAME *******************/
function startGame(){
  document.getElementById("start").innerHTML = "SIMON SAYS...";
  document.getElementById("start").onclick= 0;   //test() function without invoking function (i.e. no parenthesis)
  chooseNew();
  var index = 0;
  var flashOld = setInterval(function(){
    flashVals(memArr[index]); 
    if(++index == memArr.length){
      window.clearInterval(flashOld);
    }
  }, 2000);
  counter = memArr.length;
  document.getElementById("counter").innerHTML=counter + " clicks left! ";
}



/* Onclick functions of color buttons */
function blueButton(){
  usrArr.push(0);
  
  counter--;
  document.getElementById("counter").innerHTML=counter + " clicks left! ";
  
  document.getElementById("blue").className = "button blue select";
  setTimeout(function(){document.getElementById("blue").className = "button blue"}, 100);

  if(counter==0){
    test();
  }
}
function redButton(){
  usrArr.push(1);

  counter--;
  document.getElementById("counter").innerHTML=counter + " clicks left! ";

  document.getElementById("red").className = "button red select";
  setTimeout(function(){document.getElementById("red").className = "button red"}, 100);

  if(counter==0){
    test();
  }
}
function greenButton(){
  usrArr.push(2);

  counter--;
  document.getElementById("counter").innerHTML=counter + " clicks left! ";

  document.getElementById("green").className = "button green select";
  setTimeout(function(){document.getElementById("green").className = "button green"}, 100);

  if(counter==0){
    test();
  }
}
function yellowButton(){
  usrArr.push(3);

  counter--;
  document.getElementById("counter").innerHTML=counter + " clicks left! ";

  document.getElementById("yellow").className = "button yellow select";
  setTimeout(function(){document.getElementById("yellow").className = "button yellow"}, 100);

  if(counter==0){
    test();
  }
}
