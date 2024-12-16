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

function toggleNav() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}