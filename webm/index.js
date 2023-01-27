const video = document.querySelector('.webm__video')
const time = document.querySelector('.webm__time')

video.addEventListener('click', () => {
  if (!video.classList.contains("play")) {
  video.classList.add('play')
  video.play();
  }else{
    video.classList.remove('play')
    video.pause();
  }
});

video.addEventListener('timeupdate',(event)=>{
  if(event.target.ended){
    video.currentTime=0
    
  }
  progressUpdate(video.currentTime)
})

function progressUpdate (currentTime){
  time.innerHTML=Math.floor(currentTime / 60) + ':' + (currentTime % 60).toFixed(3)
}
