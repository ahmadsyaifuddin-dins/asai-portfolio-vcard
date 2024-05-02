const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

// Fungsi untuk mengatur pemutaran musik
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
}

// Event listener untuk memutar atau memberhentikan musik ketika tombol diklik
playButton.addEventListener('click', togglePlay);
