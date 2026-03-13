document.addEventListener('DOMContentLoaded', () => {
    const uploadBtn = document.getElementById('upload-btn');
    const uploadInput = document.getElementById('upload-input');
    const audioContainer = document.getElementById('audio-container');

    // 1. 点击炫酷按钮，触发隐藏的上传表单
    uploadBtn.addEventListener('click', () => {
        uploadInput.click();
    });

    // 2. 监听到文件选择后的处理逻辑
    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            // 生成本地的临时URL，用于前端立刻播放
            const objectURL = URL.createObjectURL(file);
            
            // 创建新的音频卡片 DOM 元素
            const newTrack = document.createElement('div');
            newTrack.className = 'audio-track';
            
            // 初始状态透明，用于实现顺滑出现的动画
            newTrack.style.opacity = '0';
            newTrack.style.transform = 'translateY(20px)';
            newTrack.style.transition = 'all 0.5s ease';

            newTrack.innerHTML = `
                <div class="track-info">
                    <span class="track-name">🎵 ${file.name}</span>
                    <span class="track-tag" style="background: var(--accent-pink);">NEW UPLOAD</span>
                </div>
                <audio controls autoplay>
                    <source src="${objectURL}" type="${file.type}">
                    Your browser does not support the audio element.
                </audio>
            `;

            // 将新音轨插入到列表顶部
            audioContainer.prepend(newTrack);

            // 稍微延迟触发动画，让浏览器有时间渲染DOM
            setTimeout(() => {
                newTrack.style.opacity = '1';
                newTrack.style.transform = 'translateY(0)';
            }, 50);

            // 清空input，保证下次同名文件也能触发change事件
            this.value = '';
        }
    });
});
