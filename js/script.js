
// hide the play button and play the video when the play button is clicked
document.getElementById('playButton').addEventListener('click', function() {
  var video = document.getElementById('heroVideo');
  video.play();
  this.style.display = 'none';
});

document.getElementById('heroVideo').addEventListener('ended', function() {
  document.getElementById('playButton').style.display = 'block';
});



