let clock = document.querySelector('.time__clock');

clock.innerHTML = dayjs().format('HH:mm');

setInterval(function(){
    clock.innerHTML = dayjs().format('HH:mm');
}, 1000);

let wrapper = document.querySelector('.wrapper');


if (clock.contains = '9:00'){
    wrapper.style.backgroundImage = 'url(../img/bg-day.jpg)';
} else {

}