<script>
    document.addEventListener("DOMContentLoaded", function () {
    const playerContainer = document.createElement("div");
    playerContainer.className = "player-container";
    playerContainer.innerHTML = `
        <iframe id="embedPlayer" src="https://rumble.com/embed/v4cfamo" allowfullscreen></iframe>
        <div class="controls">
            <button onclick="prevVideo()">Anterior</button>
            <button onclick="toggleFullscreen()">Pantalla Completa</button>
            <button onclick="nextVideo()">Siguiente</button>
        </div>
    `;

    document.body.appendChild(playerContainer);

    let videoIndex = 0;
    const videoList = [
        "https://rumble.com/embed/v4cfamo",
        "https://rumble.com/embed/v4cwdpz",
        "https://rumble.com/embed/v4cwg9u",
        "https://rumble.com/embed/v4cwgdl"
    ];

    window.nextVideo = function () {
        videoIndex = (videoIndex + 1) % videoList.length;
        document.getElementById("embedPlayer").src = videoList[videoIndex];
    };

    window.prevVideo = function () {
        videoIndex = (videoIndex - 1 + videoList.length) % videoList.length;
        document.getElementById("embedPlayer").src = videoList[videoIndex];
    };

    window.toggleFullscreen = function () {
        const iframe = document.getElementById("embedPlayer");
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { 
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    };
});
</script>
