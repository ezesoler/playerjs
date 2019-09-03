window.onload = function () {
    const media = document.querySelector('#audio');
    const btn = document.querySelector('#btn');
    const percentage = document.querySelector('#percentage');
    const time = document.querySelector('#time');
    const bar = document.querySelector('#bar');

    function toggleBtn() {
        if (media.paused === false) {
            media.pause();
            btn.classList.remove('pause');
        } else {
            media.play();
            btn.classList.add('pause');
        }
    }

    function barPoint(e) {
        const percent = e.offsetX / this.offsetWidth;
        media.currentTime = percent * media.duration;
    }

    function update() {
        //Time song:
        const currentMinute = parseInt(media.currentTime / 60) % 60;
        const currentSeconds = (media.currentTime % 60).toFixed();
        time.innerHTML = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
            currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
            }`;
        //Percentage bar.
        percentage.style.width = `${(media.currentTime / media.duration).toFixed(2) * 100}%`;
    }

    function reset() {
        btn.classList.remove('pause');
        percentage.style.width = 0;
        time.innerHTML = '00:00';
    }

    btn.addEventListener('click', toggleBtn)
    bar.addEventListener('click', barPoint);
    media.addEventListener('timeupdate', update);
    media.addEventListener('ended', reset);
    media.src = "assets/Rick Astley - Never Gonna Give You Up.mp3"
}