/*
    File: stopwatch logic.css
    Purpose: The logic for the stopwatch interfaces.
    Author: Sophia Trump
    Date: 25 February 2018
*/


window.onload = function () {
  
  /*VARIABLES*/
  var seconds = 00; 
  var tens = 00; 
  var minutes = 00;
  var laps = "";  
  var colonVal = document.getElementById("colon");
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendLap = document.getElementById("laps");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonClearLaps = document.getElementById('button-clearlaps');
  var buttonLap = document.getElementById('button-lap');
  var Interval;
    
/*---------------------------------------------------------------------------------------*/
    
    
 /*FUNCTIONS*/

    
  /*BUTTON FUNCTIONS*/
    
  buttonStart.onclick = function() {                            /*when start is clicked*/
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
  buttonStop.onclick = function() {                             /*when stop is clicked*/
    clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {                            /*when reset is clicked*/
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;   
  }
  
  buttonClearLaps.onclick = function() {                        /*when clear laps is clicked*/
    while (appendLap.lastChild) {
        appendLap.removeChild(appendLap.lastChild);
    }      
  }
  
  buttonLap.onclick = function() {                              /*when lap is clicked*/
      let minutes = appendMinutes.innerHTML;
      let seconds = appendSeconds.innerHTML;
      let tens = appendTens.innerHTML;     
      var node = document.createElement("LI");                 
      var laps = document.createTextNode(minutes + colonVal.innerHTML + seconds +                              colonVal.innerHTML + tens);       
      node.appendChild(laps);                              
      appendLap.appendChild(node);    
  }
  
 /*---------------------------------------------------------------------------------------*/
  
  
  
  /*THE STOPWATCH FUNCTIONALITY (change displayed times)*/
  
  function startTimer () {
    
    //increment ms
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }    
    else {
      appendTens.innerHTML = tens;
      
    }       
    
    //increment seconds
    if (tens > 99) {
      seconds++;
        if(seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        else {
            appendSeconds.innerHTML = seconds;
        }
        //increment minutes
        if(seconds >= 60) {
            minutes++;
            seconds = "00";
            tens = "00";            
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
            if(minutes <= 9) {
                appendMinutes.innerHTML = "0" + minutes; 
            }
            else {
                appendMinutes.innerHTML = minutes;
            }
                     
        } 
        tens = "00";
        appendTens.innerHTML = tens;      
    }       
      
  }

}