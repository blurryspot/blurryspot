// 1. 打字机
const introText = "Hi! I'm blurryspot";
let i = 0;
const typingTarget = document.getElementById("typing");

function typeWriter() {
    if (i < introText.length) {
        typingTarget.innerHTML += introText.charAt(i);
        i++;
        const speed = Math.random() * 80 + 40; 
        setTimeout(typeWriter, speed);
    }
}

// 2. 音频上传
const audioUpload = document.getElementById('audio-upload');
const audioPlayer = document.getElementById('main-audio');
const trackNameDisplay = document.getElementById('track-name');

audioUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        trackNameDisplay.innerText = "CAPTURED: " + file.name.toUpperCase();
        trackNameDisplay.style.color = "var(--accent-pink)";
        audioPlayer.play();
    }
});

window.onload = () => {
    typeWriter();
};
@keyframes blink { 0% { opacity: 0.2; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1.2); } }
