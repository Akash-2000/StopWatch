function time_to_string(time){
    let dif_hrs = time/3600000;
    let hh = Math.floor(dif_hrs);

    let dif_min = (dif_hrs-hh)*60;
    let mm = Math.floor(dif_min);

    let dif_sec = (dif_min-mm)*100;
    let ss = Math.floor(dif_sec);

    let formattedHH = hh.toString().padStart(2,"0");
    let formattedMM = mm.toString().padStart(2,"0");
    let formattedSS = ss.toString().padStart(2,"0");


    return `${formattedHH}:${formattedMM}:${formattedSS}`;

}




let startTime;
let elapsedTime = 0;
let timerInterval;
//printing logic
function print(txt){
    document.getElementById("display").innerHTML = txt;
}

function start(){
    console.log("clicked")
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
        print(time_to_string(elapsedTime)); 
    },10);
    
}

function pause(){
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
  }

  let playButton = document.getElementById("playButton")
  let pauseButton = document.getElementById("pauseButton")
  let resetButton = document.getElementById("resetButton")
  
 playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
