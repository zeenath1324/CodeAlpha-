let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

let songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let currentSong = 0;

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    audio.src = songs[currentSong];
    audio.play();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    audio.src = songs[currentSong];
    audio.play();
}

audio.addEventListener("timeupdate", function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", function () {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
