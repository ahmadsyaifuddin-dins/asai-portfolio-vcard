const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

// Fungsi untuk mengatur pemutaran musik
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play Music 🎵';
  }
}

// Event listener untuk memutar atau memberhentikan musik ketika tombol diklik
playButton.addEventListener('click', togglePlay);



// Fungsi untuk mengubah border radius saat tombol di-klik
function toggleBorderRadius() {
  // Toggle antara dua bentuk border radius
  if (playButton.classList.contains('playing')) {
    playButton.style.borderTopRightRadius = '15px';
    playButton.style.borderTopLeftRadius = '0px';
    playButton.style.borderBottomLeftRadius = '15px';
    playButton.style.borderBottomRightRadius = '0px';
  } else {
    playButton.style.borderTopLeftRadius = '15px';
    playButton.style.borderTopRightRadius = '0px';
    playButton.style.borderBottomRightRadius = '15px';
    playButton.style.borderBottomLeftRadius = '0px';
  }
  
  // Toggle class 'playing' untuk menandai status play/pause
  playButton.classList.toggle('playing');
}

// Event listener untuk memanggil fungsi saat tombol diklik
playButton.addEventListener('click', toggleBorderRadius);
