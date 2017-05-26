//Global Variables

//Captures choice of user
var userChoice= "";

//Stores total score and value of answer
var correct = 0;
var total= 5;
var value = false;

//Starting time
var count = 181;

//Stores timer 
var timer;


//Start

$(document).ready(function() {
    $("#questions, #submit").hide();

//Starts timer when button is clicked
$("#start").on("click", function start() {
	$("#questions, #submit").show();
	$("#start").hide();

//Tells timer to decrease every second
function run () {
 timer = setInterval(decrement, 1000);
}

//Counts down seconds
function decrement () {
	count--;

//Converts miliseconds into minutes and seconds
	var converted = timeConverter(count);
	$("#timer").html("Time Remaining: " + converted);

//Once timer reaches 0, stop the timer
	if (count === 0) {

	stop();

//Displays score when timer reaches 0
	$("#score").html("Score: " + total);
	console.log(score);

	}
}

//Creates function to stop timer
function stop () {
	clearInterval(timer)
}

run();

//Converts seconds into minutes
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

//
$("input").on("click", function() {
	value = ($(this).val())
	console.log(value);

	if (value == "true") {
	correct ++;
	console.log(correct);

}

//Creates function when submit button is clicked
$("#submit").on("click", function () {
	
//Displays correct answers out of total questions
	$("#score").html("Score: " + correct + "/" + total);
	
//Stops timer
	stop ();
	// $("#restart").html("<button>Play Again</button>");

	// $("#restart").on("click", function reset() {

	// });

	});	

});


});


});