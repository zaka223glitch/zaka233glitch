const audio1 = new Audio();
audio1.src = "./click-234708.mp3";

function playAudio() {
  audio1.play();
  audio1.onended = function () {
    window.location.href = './page2.html';
  };
}

const audio2 = new Audio();
audio2.src = "./mixkit-achievement-bell-600.wav";

function playAudio1() {
  audio2.play();
  setTimeout(() => {
    window.location.href = './page3.html';
  }, 200);
}

const audio3 = new Audio();
audio3.src = "./mixkit-achievement-bell-600.wav";

function playAudio2() {
  audio3.play(); 
  setTimeout(() => {
    window.location.href = './page4.html';
  }, 200);
}

function playAudio3() {
  audio3.play(); 
  setTimeout(() => {
    window.location.href = './congrats.html';
  }, 200);
}

function toggleNav() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}


function Congrats() {
  window.location.href = "congrats.html";
}

const gameOverAudio = new Audio();
gameOverAudio.src = "./buzzer-or-wrong-answer-20582.mp3"; 

function GameOverPage() {
  gameOverAudio.play(); 
  
  gameOverAudio.onended = function () {
    setTimeout(() => {
      window.location.href = "gameover.html"; 
    }, 200); 
  };
}

