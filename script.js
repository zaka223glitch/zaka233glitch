
const audio = new Audio();
audio.src = "./click-234708.mp3";

audio.onended = function() {
    window.location.href = './page2.html'; 
};

function playAudio() {
    audio.play();  
}