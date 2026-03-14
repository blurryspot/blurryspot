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

// 2. 音频切换逻辑
const player = document.getElementById('main-audio');
const trackName = document.getElementById('track-name');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        const audioSrc = this.getAttribute('data-src');
        const altName = this.querySelector('img').getAttribute('alt');
        
        if(audioSrc) {
            player.src = audioSrc;
            trackName.innerText = "STREAMING: " + altName;
            trackName.style.color = "var(--klein-blue)";
            player.play();
        }
    });
});

// 3. 本地上传功能保持
document.getElementById('audio-upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        player.src = URL.createObjectURL(file);
        trackName.innerText = "LOCAL: " + file.name.toUpperCase();
        player.play();
    }
});

window.onload = typeWriter;
