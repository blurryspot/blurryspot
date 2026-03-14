:root {
    --bg-color: #050505;
    --accent-acid: #bfff00; 
    --accent-pink: #ff00de; 
    --text-main: #ffffff;
    --glass: rgba(255, 255, 255, 0.05);
    --border: rgba(191, 255, 0, 0.3);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    cursor: crosshair;
}

/* Y2K 3D网格 */
.grid-floor {
    position: fixed;
    bottom: 0; width: 100%; height: 50%;
    background-image: 
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: bottom;
    opacity: 0.3;
    z-index: -2;
}

.grain-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: url('https://grainy-gradients.vercel.app/noise.svg');
    opacity: 0.08;
    pointer-events: none;
    z-index: 1000;
}

/* 头像 & 酸性元素 */
.avatar-wrapper {
    position: relative;
    width: 140px; height: 140px;
    margin-bottom: 30px;
}

.avatar-ring {
    position: absolute;
    top: -5px; left: -5px; right: -5px; bottom: -5px;
    border: 2px solid var(--accent-acid);
    border-radius: 50%;
    animation: rotate 10s linear infinite;
}

.user-avatar {
    width: 100%; height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--bg-color);
    box-shadow: 0 0 30px var(--accent-acid);
}

@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.acid-star {
    position: absolute;
    font-size: 40px;
    color: var(--accent-acid);
    filter: drop-shadow(0 0 10px var(--accent-acid));
    animation: blink 1.5s infinite alternate;
}

.star-1 { top: 10%; right: 15%; }
.star-2 { bottom: 20%; left: 10%; color: var(--accent-pink); }

.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
}

.hero-title {
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 900;
    -webkit-text-stroke: 1px var(--accent-acid);
    color: transparent;
    text-transform: uppercase;
}

.hero-tag {
    background: var(--accent-pink);
    color: #000;
    padding: 5px 15px;
    font-weight: 900;
    margin-top: 20px;
    transform: skew(-15deg);
    width: fit-content;
}

/* 跑马灯 */
.marquee {
    border: 2px solid var(--accent-acid);
    padding: 20px 0;
    background: var(--accent-acid);
    color: #000;
    overflow: hidden;
}

.marquee-track {
    display: flex;
    width: 200%;
    animation: scroll 20s linear infinite;
}

.marquee span {
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
    padding-right: 50px;
}

@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* 播放器 */
.glass-player {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 2px solid var(--accent-acid);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 15px 15px 0px var(--accent-pink);
}

.upload-btn {
    display: block;
    padding: 20px;
    background: var(--accent-acid);
    color: #000;
    text-align: center;
    font-weight: 900;
    cursor: pointer;
    transform: skew(-5deg);
}

@keyframes blink { 0% { opacity: 0.2; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1.2); } }
