const text = "Hetvi Parmar";
const speed = 150; // typing speed in ms
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

function scrollToAnimation() {
    document.getElementById("animation").scrollIntoView({
        behavior: "smooth"
    });
}