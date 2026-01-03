
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started = false;


    
function nextSequence(){

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


if (randomChosenColour==="red"){
var audio = new Audio("sounds/red.mp3")
audio.play();
}

else if(randomChosenColour==="green") {
    var audio = new Audio("sounds/green.mp3")
audio.play();
}

else if(randomChosenColour==="blue") {
    var audio = new Audio("sounds/blue.mp3")
audio.play();
}

else if(randomChosenColour==="yellow") {
    var audio = new Audio("sounds/yellow.mp3")
audio.play();
}


}


$(".btn").on("click", function(event) {
    var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour); 
          animatePress(userChosenColour);
          checkAnswer(userClickedPattern.length - 1);

     
});

function playSound(name) {
     var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
   
}


function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");}, 100);
}


$(document).keypress(function(event){
    if(!started){
     $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
}
);

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            nextSequence();
            userClickedPattern=[];
        }
    }
    else {
        var audio = new Audio("sounds/wrong.mp3")
audio.play();
             $("#level-title").text(""Game Over, Press the Reset Button to restart"");
              $("body").addClass("game-over");
              setTimeout(function () {
    $("body").removeClass("game-over");}, 200);
    startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

$("#startButton").on("click", function(event) {
  if(!started){
     $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
}
);

$("#resetButton").on("click", function(event) {
  level=0;
    gamePattern=[];
    started=false;
    $("#level-title").text("Press the Start button to begin");
}
);






