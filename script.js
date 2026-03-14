// 1. 打字机逻辑
const introText = "Hi! I'm blurryspot";
let i = 0;
const target = document.getElementById("typing");

function typeWriter() {
    if (i < introText.length) {
        target.innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter, Math.random() * 100 + 50);
    }
}

// 2. 音频上传交互
const audioInput = document.getElementById('audio-upload');
const player = document.getElementById('main-audio');
const trackName = document.getElementById('track-name');

audioInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        player.src = URL.createObjectURL(file);
        trackName.innerText = "CAPTURED: " + file.name.toUpperCase();
        trackName.style.color = "var(--klein-blue)";
        player.play();
    }
});

window.onload = typeWriter;
