let timer;
let timerCount = 59;
function StartTimer(){
    document.getElementById('timer').innerHTML = timerCount;
    timerCount--;
    if(timerCount < 0 ) {
        alert('Вы победили в конкурсе!');
        clearTimeout(timer);
        
    } else {
        timer = setTimeout(StartTimer, 1000);
    }
}
let timerId = StartTimer();

