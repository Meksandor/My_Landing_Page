let play = document.getElementById("newsletbutton");
let play2 = document.getElementById("newsletbutton2");

function playMusic() {
    let audio = new Audio("media/oh_hell_nah_short.mp3");
    audio.play()
}


play.addEventListener("click", playMusic);
play2.addEventListener("click", playMusic);

let logo = document.querySelector('.logo');

logo.addEventListener('load', (event) => {
    console.log('Logo has been loaded succesfully!');
});

logo.src = "media/meksandorSFLogo.png";