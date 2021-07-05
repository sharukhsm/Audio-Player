var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 4,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
});

function playMusic() {
  wavesurfer.on("ready", function () {});
  wavesurfer.play();
}

function pauseMusic() {
  wavesurfer.on("ready", function () {});
  wavesurfer.pause();
}

wavesurfer.load("https://file06.mp3ring.org/dl/iflgzZNCTY6AIfMbiTHy3A/1625476994/best-ringtone-download-044f4738dcc275b056ffc492530a5bf5/just-like-animals-maroon-5.mp3");
