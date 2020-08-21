const videoElement = document.getElementById('video');
const play = document.getElementById('button');

// Prompt to select Media, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('Whoops, Error Here : ', error);
  }
}

play.addEventListener('click', async () => {
  // Disabled
  play.disabled = true;
  // Start picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  play.disabled = false;
})

// ON load
selectMediaStream()