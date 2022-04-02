// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timer = document.getElementById("timer"); //timer variable

//Global variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;
var sec = 0;
var timerId;
var timerRunning = false;

function startGame(){
    //initialize game variables
    generatePattern();
    clueHoldTime = 1000;
    progress = 0;
    strikes = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    timer.innerHTML = 0;
    timer.classList.remove("hidden");
    restartStrikes();
    playClueSequence();
}

function stopGame(){
    stopTimer();
    hideStrikes();
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    timer.classList.add("hidden");
}

function lightButton(btn){
    document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function startTimer(){
  sec = 15;
  timer.innerHTML = sec;
  timerRunning = true;
  console.log("starting timer");
  timerId = setInterval(tick, 1000);
  function tick(){
    if(sec == 0){
      loseGame();
    }
    else{
      sec--;
      timer.innerHTML = sec;
    }
  }
}

function stopTimer(){
  console.log("stopping timer");
  clearInterval(timerId);
  timerRunning = false;
}

function playClueSequence(){
  if(timerRunning){
    stopTimer();
  }
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(startTimer, delay);
  clueHoldTime -= 100;
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Awesome! Your memory is out of this world. You won!");
}

function restartStrikes(){
  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("heart3").classList.remove("hidden");
}

function hideStrikes(){
  document.getElementById("heart1").classList.add("hidden");
  document.getElementById("heart2").classList.add("hidden");
  document.getElementById("heart3").classList.add("hidden");
}

function removeHeart(heart){
  document.getElementById("heart"+heart).classList.add("hidden");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    
      if(guessCounter == progress){
          
          if(progress == pattern.length - 1){
              winGame();
          }
          else{
              progress++;
              playClueSequence();
          }
        
      }
      else{
        guessCounter++;
      }
      
  }
  else{
      strikes++;
      removeHeart(strikes);
      if(strikes == 3){
          loseGame();
      }
  }
  
}

//Function to generate random pattern
function generatePattern(){
    for(let i=0; i < 8; i++){
        pattern[i] = Math.floor(Math.random() * 6) + 1;
    }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 492.6,
  6: 531.8
}
function playTone(btn,len){
  document.getElementById("image"+btn).classList.remove("hidden");
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById("image"+btn).classList.remove("hidden");
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(btn){
  document.getElementById("image"+btn).classList.add("hidden");
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)