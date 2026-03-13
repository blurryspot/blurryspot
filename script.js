document.addEventListener('DOMContentLoaded', () => {
    // 1. 打字机效果实现
    const text = "Hi I'm Blurryspot";
    const speed = 100;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

    // 2. 鼠标跟随的微弱光影 (增加互动感)
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        gsap.to(follower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5
        });
    });

    // 3. 上传功能保持原有逻辑并增加成功提示
    const uploadInput = document.getElementById('upload-input');
    uploadInput.addEventListener('change', function(e) {
        if(this.files[0]) {
            alert("文件已装载：进入 blurryspot 混音模拟环境...");
            // 此处复用之前的音频卡片生成逻辑
        }
    });
});
