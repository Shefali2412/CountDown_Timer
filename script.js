// initialising variables

let timer;
let timeLeft;
let isTimerRunning = false;

// function to starttimer or to initiate countdown 

function startTimer(minutes){
    if (!isTimerRunning){
        timeLeft = minutes * 60;
        isTimerRunning = true;

        timer = setInterval(function () {    // setInterval function executes this block of code every second (1000 milliseconds),
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            $(`#timerDisplay`).text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`); // Checks if the value of seconds is less than 10. If true, it adds a leading '0' to ensure that the seconds are always displayed with two digits. If false, it adds an empty string. Finally, it appends the value of seconds

            if (timeLeft === 0) {
                clearInterval(timer);
                isTimerRunning = false;
                $('#timerDisplay').text('00:00');
                $('#notification')[0].play();    // play sound - [0]: This is used to access the first element of the jQuery collection . Convrting jQuery object into a native JavaScript object, because the play() method is a native JavaScript method and is not directly available on the jQuery object.
                alert('CountDown Over!');

            } else {
                timeLeft--;
            }
        }, 1000); 
    }

}

// function to reset timer

function resetTimer(){
    clearInterval(timer);
    isTimerRunning = false;
    $('#timerDisplay').text('25:00');
    $('#timer').val(25);    
   
}

$(document).ready(function() { // It ensures that the JavaScript code runs after the document has loaded.
    $('#start').click(function () {  // start button 
       
        const minutes =  $('#timer').val(); // This retrieves the current value of the input field with the ID "timer" & assign it to minutes
        startTimer(minutes); // call the startTimer function for initiating the countdown timer.
    });

    $('#reset').click(function () { // reset button
         resetTimer();
    });
    
    $('#plus').click(function () { // plus button
        let currentMinutes = parseInt($('#timer').val(), 10) //  retrieves the current value of the input field . parseInt(..., 10): This converts the retrieved value from a string to an integer. The 10 argument specifies that the number should be parsed in base-10 (decimal) & assign it to currentMinutes.
        $('#timer').val(currentMinutes + 1); //it increases the displayed value in the input field by 1
        
    });
    
    $('#minus').click(function () { // minus Button
         let currentMinutes = parseInt($('#timer').val(), 10);
         if (currentMinutes > 1){
            $('#timer').val(currentMinutes - 1); // it decreases the displayed value in the input field by 1 when input value is greater than 1
        
         }
    });

});



