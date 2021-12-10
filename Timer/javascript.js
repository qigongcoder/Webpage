var myVar;
var string;
var session_length = 1500;
var break_length = 300;
var current_val = session_length;
var running = true;
var session_type = "session";
var just_loaded = true;

function startStop() {
  just_loaded = false;
  running = !running;
  if (running == false) {
    start();
  } else {
    stop();
  }
}

function start() {
  if (session_type == "session") {
    document.getElementById("time-left").style.color = "green";
  } else {
    document.getElementById("time-left").style.color = "blue";
  }
  document.getElementById("time-left").innerHTML = convertSecToMinAndSecs(current_val);
  myVar = setInterval(changeText, 1000);
}

function stop() {
  clearInterval(myVar);
  document.getElementById("time-left").style.color = "black";
}

function end() {

  var x = document.getElementById("beep");
  x.play();

  var audio = new Audio('gong-chinese-daniel_simon.mp3');
  audio.play();

  clearInterval(myVar);
  if (session_type == "session") {
    session_type = "break";
    document.getElementById("timer-label").innerHTML = session_type;
    document.getElementById("time-left").style.color = "dark_green";
    current_val = break_length;
  } else {
    session_type = "session";
    document.getElementById("timer-label").innerHTML = session_type;
    current_val = session_length;
  }
  start();
}


function changeText() {
  current_val--;
  if (current_val == -1) {
    end();
    return;
  }
  document.getElementById("time-left").innerHTML = convertSecToMinAndSecs(current_val);
}

function restart() {
  clearInterval(myVar);
  session_length = 1500;
  break_length = 300;
  current_val = session_length;
  just_loaded = true;
  session_type = "session";
  running = true;
  var x = document.getElementById("beep");
  x.pause();
  x.currentTime = 0.0;
  document.getElementById("session-length").innerHTML = convertSecToMin(session_length);
  document.getElementById("break-length").innerHTML = convertSecToMin(break_length);
  document.getElementById("time-left").style.color = "black";
  document.getElementById("time-left").innerHTML = convertSecToMinAndSecs(current_val);
  document.getElementById("timer-label").innerHTML = session_type;
}


function sessionIncrease() {
  if (session_length < 3600) {
    session_length = session_length + 60;
    document.getElementById("session-length").innerHTML = convertSecToMin(session_length);
    if (just_loaded) {
      current_val = session_length;
      document.getElementById("time-left").innerHTML = convertSecToMinAndSecs(current_val);
    }
  }
}

function sessionDecrease() {
  if (session_length > 60) {
    session_length = session_length - 60;
    document.getElementById("session-length").innerHTML = convertSecToMin(session_length);
    if (just_loaded) {
      current_val = session_length;
      document.getElementById("time-left").innerHTML = convertSecToMinAndSecs(current_val);
    }
  }
}

function breakIncrease() {
  if (break_length < 3600) {
    break_length = break_length + 60;
    document.getElementById("break-length").innerHTML = convertSecToMin(break_length);
  }
}

function breakDecrease() {
  if (break_length > 60) {
    break_length = break_length - 60;
    document.getElementById("break-length").innerHTML = convertSecToMin(break_length);
  }
}


function convertSecToMinAndSecs(secs) {
  var min = Math.floor(secs / 60).toString();
  min = (min.length == 1) ? "0" + min : min;
  var sec = (secs % 60).toString();
  sec = (sec.length == 1) ? "0" + sec : sec;
  return min + ":" + sec;
}

function convertSecToMin(secs) {
  var min = Math.floor(secs / 60).toString();
  return min;
}