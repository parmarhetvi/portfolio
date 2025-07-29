const ball = document.getElementById("ball");
let x = 0;
let y = 0;
let dx = 4; // x direction speed
let dy = 4; // y direction speed

function animate() {
    // Move position
    x += dx;
    y += dy;

    // Bounce off left/right
    if (x <= 0 || x + 40 >= window.innerWidth) {
        dx = -dx;
    }

    // Bounce off top/bottom
    if (y <= 0 || y + 40 >= window.innerHeight) {
        dy = -dy;
    }

    // Update position
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(animate);
}

animate();