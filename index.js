// Define variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variables to hold display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define variables to hold setInterval function
let interval = null;

// Define variable to hold stopwatch status
let state = "stopped";

// Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
    seconds++;
    //Logic to determine when to increment next value
    if (seconds/60 ===1) {
        seconds = 0;
        minutes++;
    
        if (minutes/60 ===1) {
            minutes = 0;
            hours++;
        }
    }

//If seconds/minutes/hours are only one digit, add a leading 0 to the value

    if (seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    }
    else {
        displaySeconds = seconds; 
    }
    if (minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    }
    else {
        displayMinutes = minutes; 
    }
    if (hours < 10) {
        displayHours = '0' + hours.toString();
    }
    else {
        displayHours = hours; 
    }

     //Display updated time values to user
    document.getElementById('display').innerHTML =  
        displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
}

function start() {
    if(state === "stopped") {
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch,1000);
        document.getElementById('start').innerHTML = "Stop";
        state = "started";
        }
        else 
        {
            window.clearInterval(interval);
            document.getElementById('start').innerHTML = "Start";
            state = "stopped";
        }
}

//Function to reset the stopwatch
function reset() {
    window.clearInterval(interval);
	seconds = 0;
	hours = 0;
	minutes = 0;
	document.getElementById('display').innerHTML = '00:00:00';
	document.getElementById('handler').innerHTML = 'Start';
	state = "stopped";
}

