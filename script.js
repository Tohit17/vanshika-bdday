function playMusic() {
    var audio = document.getElementById('birthdayMusic');
    audio.play();
    startConfetti();
}

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.querySelector('.greeting');
    greeting.classList.add('animate');
});
