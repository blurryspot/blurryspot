const introText = "Hi! I'm blurryspot";
let i = 0;

function typeWriter() {
    if (i < introText.length) {
        document.getElementById("typing").innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}

// 音频切换逻辑
const player = document.getElementById('main-audio');
const trackName = document.getElementById('track-name');
const items = document.querySelectorAll('.archive-item');

items.forEach(item => {
    item.addEventListener('click', function() {
        const src = this.getAttribute('data-audio');
        if(src) {
            player.src = src;
            trackName.innerText = "CAPTURED_SIGNAL / " + this.querySelector('img').alt;
            player.play();
            // 点击时的深色闪动效果
            document.body.style.backgroundColor = "#00081a";
            setTimeout(() => document.body.style.backgroundColor = "#050505", 200);
        }
    });
});

window.onload = typeWriter;
