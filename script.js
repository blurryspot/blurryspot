// 打字机逻辑
const introText = "Hi! I'm blurryspot";
let n = 0;
const target = document.getElementById("typing");

function type() {
    if (n < introText.length) {
        target.innerHTML += introText.charAt(n);
        n++;
        setTimeout(type, Math.random() * 100 + 50);
    }
}

// 音频处理逻辑
const audioInput = document.getElementById('audio-upload');
const player = document.getElementById('main-audio');

audioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        player.src = URL.createObjectURL(file);
        document.getElementById('track-name').innerText = "LOADED: " + file.name.toUpperCase();
        player.play();
    }
});

window.onload = type;
