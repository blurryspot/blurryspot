// 1. 打字機內容更新
const introText = "Hi! I'm blurryspot";
let n = 0;
const typingTarget = document.getElementById("typing");

function typeWriter() {
    if (n < introText.length) {
        typingTarget.innerHTML += introText.charAt(n);
        n++;
        setTimeout(typeWriter, Math.random() * 70 + 30);
    }
}

// 2. 音頻上傳交互
const audioInput = document.getElementById('audio-upload');
const player = document.getElementById('main-audio');
const trackStatus = document.getElementById('track-name');

audioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        player.src = URL.createObjectURL(file);
        trackStatus.innerText = "CAPTURED: " + file.name.toUpperCase();
        trackStatus.style.color = "var(--accent-pink)";
        player.play();
        
        // 增加背景流速感
        document.querySelectorAll('.blob').forEach(b => b.style.animationDuration = '10s');
    }
});

window.onload = typeWriter;
