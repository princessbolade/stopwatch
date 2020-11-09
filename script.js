let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;
let status = 'stopped';

let displaySeconds;
let displayMinutes;
let displayHours;

const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")

function stopwatch(){
    seconds++;
    
    if (seconds / 60 ===1){
        seconds = 0;
        minutes++;

        if (minutes /60 ===1){
            minutes = 0;
            hours++;
        }
    }

    displaySeconds= 0;
    displayMinutes =0;
    displayHours = 0;

    if (seconds < 10){
        displaySeconds = "0"  + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    } 


    document.getElementById("boxhr1").innerHTML = String(displayHours)[0];
    document.getElementById("boxhr2").innerHTML = String(displayHours)[1];
    document.getElementById("boxmin1").innerHTML = String(displayMinutes)[0];
    document.getElementById("boxmin2").innerHTML = String(displayMinutes)[1];
    document.getElementById("boxsec1").innerHTML = String(displaySeconds)[0];
    document.getElementById("boxsec2").innerHTML = String(displaySeconds)[1];
}


startButton.addEventListener("click", ()=>{
    let text = startButton.textContent.trim().toLocaleLowerCase()
    console.log(text)
    if(text === 'start'){
        interval = window.setInterval (stopwatch, 1000);
        startButton.textContent = 'Pause'
    }
    else if(text === 'pause'){
        clearInterval(interval)
        startButton.textContent = "Start"
    }
    
})
resetButton.addEventListener('click', ()=>{
    /*console.log("sorosoke-werey")*/
    clearInterval(interval)
     seconds = 0;
     minutes = 0;
     hours = 0;
    
    document.getElementById("boxhr1").innerHTML = 0
    document.getElementById("boxhr2").innerHTML = 0
    document.getElementById("boxmin1").innerHTML = 0
    document.getElementById("boxmin2").innerHTML = 0
    document.getElementById("boxsec1").innerHTML = 0
    document.getElementById("boxsec2").innerHTML = 0
    startButton.textContent = "Start"
})