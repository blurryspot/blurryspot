// 1. 打字机效果增强：支持多行或循环
const text = "Hi, I'm Blurryspot.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 2. 鼠标跟随光晕 (Interactive Glow)
const glow = document.querySelector('.liquid-glow');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40; // 偏移幅度
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    glow.style.transform = `translate(${x}px, ${y}px)`;
});

// 3. 音频可视化与节奏感 (Visualizer Logic)
const input = document.getElementById('audio-input');
const audio = document.getElementById('main-audio');
const display = document.querySelector('.track-display');
const avatar = document.querySelector('.avatar-capsule');

input.addEventListener('change', function() {
    const file = this.files[0];
    if(file) {
        const url = URL.createObjectURL(file);
        audio.src = url;
        display.innerText = "CAPTURED: " + file.name.toUpperCase();
        audio.play();
        avatar.classList.add('playing');
        
        // 如果想更进一步，这里可以加入 Web Audio API 分析频率
        setupVisualizer(audio);
    }
});

// 当音乐停止时取消动画
audio.onpause = () => avatar.classList.remove('playing');
audio.onplay = () => avatar.classList.add('playing');

window.onload = typeWriter;
