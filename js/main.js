let clock = document.querySelector('.time__clock');
let wrapper = document.querySelector('.wrapper');
let timeText = document.querySelector('.time__text');
let hour = dayjs().format('HH');


clock.innerHTML = dayjs().format('HH:mm');

setInterval(function(){
    clock.innerHTML = dayjs().format('HH:mm');
    if (hour < 20 && hour > 7){
        wrapper.style.backgroundImage = 'url(../img/bg-day.jpg)';
    } else {
        wrapper.style.backgroundImage = 'url(../img/bg-night.jpg)';
    }
}, 1000);



if (hour > 6 && hour <= 10) {
    document.querySelector('.time__icon').src='img/icon/sun.png'
    timeText.innerHTML = 'GOOD MORNING, IT’S CURRENTLY'
} else if (hour > 10 && hour < 16) {
    timeText.innerHTML = 'GOOD DAY, IT’S CURRENTLY'
} else if (hour > 16 && hour < 22) {
    document.querySelector('.time__icon').src='img/icon/moon.png'
    timeText.innerHTML = 'GOOD EVENING, IT’S CURRENTLY'
} else if (hour > 22 || hour < 6) {
    timeText.innerHTML = 'GOOD NIGHT, IT’S CURRENTLY'
};


let randomClick = document.querySelector('.random__btn');

var quotes = [
    '«Чем умнее человек, тем легче он признает себя дураком»',
    '«Никогда не ошибается тот, кто ничего не делает»',
    '«Менее всего просты люди, желающие казаться простыми»',
    '«Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?»',
    '«Мода проходит, стиль остаётся»',
    '«Если человек не нашёл, за что может умереть, он не способен жить»',
    '«Не оборачивается тот, кто устремлён к звёздам»',
    '«Человечество обладает одним поистине мощным оружием, и это смех»',
    '«Тренируйся с теми, кто сильнее. Не сдавайся там, где сдаются другие. И победишь там, где победить нельзя»',
    '«Комедия – это очень серьёзное дело!»',
    '«Будьте менее любопытны о людях, но более любопытны об идеях»',
    '«Когда я собираюсь писать новый сценарий, самое трудное для меня – это пойти в канцтовары и купить блокнот»',
    '«Ненавижу всяческую мертвечину! Обожаю всяческую жизнь!»',
    '«Мышление – верх блаженства и радость жизни, доблестнейшее занятие человека»',
];
var autor = [
    'Альберт Эйнштейн',
    'Теодор Рузвельт',
    'Лев Николаевич Толстой',
    'Коко Шанель',
    'Стив Джобс',
    'Мартин Лютер Кинг',
    'Джон Леннон',
    'Лао-цзы',
    'Фаина Раневская',
    'Генри Форд',
    'Бернард Шоу',
    'Зигмунд Фрейд',
    'Михаил Булгаков',
    'Индира Ганди',
];
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.querySelector('.random__title').innerHTML = quotes[randomNumber];
    var randomAutor = Math.floor(Math.random() * (autor.length));
    document.querySelector('.random__subtitle').innerHTML = autor[randomNumber];
}