export function initTimer(time) {
  const timeH = document.querySelector('.timer');
  let timeSecond = 10-time;

  displayTime(timeSecond);

  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${timeFormat(min)}:${timeFormat(sec)}`
  }

  function timeFormat(number) {
    return `${number<10 ? '0' :''}${number}`
  }

  // const countDown = setInterval(()=>{
  //   timeSecond --;
  //   displayTime(timeSecond);
  //   if (timeSecond <= 0 || timeSecond < 1){
  //     clearInterval(countDown);

  //   }
  // },1000)
}
