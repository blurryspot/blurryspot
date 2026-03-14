// 1. 增强型打字机逻辑
const introText = "Initializing session... Accessing blurryspot database...";
let i = 0;
const typingTarget = document.getElementById("typing");

function typeWriter() {
    if (i < introText.length) {
        typingTarget.innerHTML += introText.charAt(i);
        i++;
        // 模拟不均匀的打字速度（更有真人感或旧机器感）
        const speed = Math.random() * 100 + 50; 
        setTimeout(typeWriter, speed);
    }
}

// 2. 音频上传与实时状态显示
const audioUpload = document.getElementById('audio-upload');
const audioPlayer = document.getElementById('main-audio');
const trackNameDisplay = document.getElementById('track-name');
const blobs = document.querySelectorAll('.blob');

audioUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        trackNameDisplay.innerText = "CAPTURED: " + file.name.toUpperCase();
        audioPlayer.play();

        // 交互：播放时背景液体流动速度加快，增加动感
        blobs.forEach(blob => {
            blob.style.animationDuration = '8s';
        });
    }
});

// 监听暂停，恢复背景流动速度
audioPlayer.onpause = () => {
    blobs.forEach(blob => {
        blob.style.animationDuration = '20s';
    });
};

// 页面加载完成后启动打字机
window.onload = () => {
    typeWriter();
};
