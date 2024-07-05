// Confetti effect inspired by https://www.kirilv.com/canvas-confetti/
function startConfetti() {
    const confetti = document.getElementById('confettiCanvas');
    const ctx = confetti.getContext('2d');
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;

    const confettiPieces = [];
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 1,
            angle: Math.random() * 2 * Math.PI,
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confetti.width, confetti.height);
        confettiPieces.forEach(piece => {
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.size, 0, 2 * Math.PI);
            ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
            ctx.fill();
            piece.x += Math.cos(piece.angle) * piece.speed;
            piece.y += Math.sin(piece.angle) * piece.speed;
            if (piece.x > confetti.width) piece.x = 0;
            if (piece.y > confetti.height) piece.y = 0;
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
