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

wavesurfer.load("http://dl.moozika.ir/mycont/uploads/2021/02/Animals.mp3");
