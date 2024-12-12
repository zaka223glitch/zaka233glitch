const audio = new Audio();
audio.src = "./click-234708.mp3";

function playAudio() {
  audio.play();
  audio.onended = function() {
    window.location.href = './page2.html'; 
  };
}

function toggleNav() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}