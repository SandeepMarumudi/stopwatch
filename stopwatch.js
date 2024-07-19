let hours= 0;
let minutes= 0;
let seconds = 0;
let millisecond = 0;
let start = document.getElementById("start");
let dev = document.getElementById("watch");
start.addEventListener("click", star);
function star() {
  start_time = setInterval(time, 10);
}
function time() {
  millisecond+= 10;
  if (millisecond == 1000) {
    seconds += 1;
    millisecond = 0;
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
      if (minutes == 60) {
        hours += 1;
        minutes = 0;
      }
    }
  }
  let h,m,s,ms
  if(hours<10)
  {
     h="0"+hours
  }
  else{
    h=hours
  }
  if(minutes<10)
  {
    m="0"+minutes
  }
  else{
    m=minutes
  }
  if(seconds<10)
  {
    s="0"+seconds
  }
  else{
    s=seconds
   }
 
  let time = `${h}:${m}:${s}:${millisecond}`;
  let abc = document.getElementById("watch");
  abc.innerHTML = time;
}
//pause
let pause = document.getElementById("pause");
pause.addEventListener("click", () => {
  clearInterval(start_time);
});
//reset
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  clearInterval(start_time);
  hours = 0;
  minutes = 0;
  seconds= 0;
  millisecond = 0;
  dev.innerHTML = `0${hours}:0${minutes}:0${seconds}:00${millisecond}`;
});
