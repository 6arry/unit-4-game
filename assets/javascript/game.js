// GLOBAL VARIABLES =============================================== //
var goalNumber = 0,
    totalScore = 0,
    wins = 0,
    losses = 0,
    crystal1 = 0,
    crystal2 = 0,
    crystal3 = 0,
    crystal4 = 0;

// FUNCTIONS ====================================================== //

function readyStart() {
    var random = Math.floor(Math.random() * 103) + 19;
        goalNumber = goalNumber + random;
        $("#goal").html(goalNumber)
    console.log("My goal is to get " + goalNumber);
    
    var rock1 = Math.floor(Math.random() * 12) + 1;
        crystal1 = crystal1 + rock1;
    console.log("My first crystal has a value of " + crystal1);

    var rock2 = Math.floor(Math.random() * 12) + 1;
        crystal2 = crystal2 + rock2;
    console.log("My second crystal has a value of " + crystal2);

    var rock3 = Math.floor(Math.random() * 12) + 1;
        crystal3 = crystal3 + rock3;
    console.log("My third crystal has a value of " + crystal3);

    var rock4 = Math.floor(Math.random() * 12) + 1;
        crystal4 = crystal4 + rock4;   
    console.log("My fourth crystal has a value of " + crystal4);

    $('#playerScore').html(totalScore);
}

// ROCK CLICKS =================================================== //

$('#rock-1').on("click", function() {
    totalScore = totalScore + crystal1;
    $('#playerScore').html(totalScore);
    if (totalScore === goalNumber) {
        winner();
    } else if (totalScore > goalNumber) {
        loser();
    }
    // alert("Rock 1 is clicked");
})

$('#rock-2').on("click", function() {
    totalScore = totalScore + crystal2;
    $('#playerScore').html(totalScore);
    if (totalScore === goalNumber) {
        winner();
    } else if (totalScore > goalNumber) {
        loser();
    }
    // alert("Rock 2 is clicked");
})

$('#rock-3').on("click", function() {
    totalScore = totalScore + crystal3;
    $('#playerScore').html(totalScore);
    if (totalScore === goalNumber) {
        winner();
    } else if (totalScore > goalNumber) {
        loser();
    }
    // alert("Rock 3 is clicked");
})

$('#rock-4').on("click", function() {
    totalScore = totalScore + crystal4;
    $('#playerScore').html(totalScore);
    if (totalScore === goalNumber) {
        winner();
    } else if (totalScore > goalNumber) {
        loser();
    }
    // alert("Rock 4 is clicked");
})

// END GAME RESULT FUNCTIONS ==================================== //

function winner () {
    wins++;
    $('#wins').html(wins)
    alert('Winner Winner Chicken Dinner!')
    reset();
}

function loser(){
    losses++;
    $('#losses').html(losses)
    alert("D'aww you lose ^_- Please try again")
    reset();
}

function reset(){
        goalNumber = 0,
        totalScore = 0,
        crystal1 = 0,
        crystal2 = 0,
        crystal3 = 0,
        crystal4 = 0;
        readyStart();
}

readyStart();