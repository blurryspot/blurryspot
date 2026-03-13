document.addEventListener('DOMContentLoaded', () => {
    // 文艺的打字机逻辑
    const text = "Hi, I'm Blurryspot.";
    let i = 0;
    const speed = 150;

    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();

    // 音频上传实时反馈
    const upload = document.getElementById('audio-upload');
    const player = document.getElementById('main-player');
    const nameDisplay = document.querySelector('.track-name');

    upload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if(file) {
            const url = URL.createObjectURL(file);
            player.src = url;
            nameDisplay.innerText = file.name.toUpperCase();
            player.play();
        }
    });
});
