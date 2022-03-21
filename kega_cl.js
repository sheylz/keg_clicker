// TODO:
// Сохранения (cookie)
// Заводы кег (базовое производство)
// Наполнение кег (продажа)
// Реклама кег (повышение денег)

var clicks = 1
var clicks_per_upg = 1
var upgrade_cost = 20
document.getElementById('kega').setAttribute('draggable', false);

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Убрано для проверки

// if (clicks != 1 && clicks != NaN) {
//     clicks = getCookie('kega_clicks')
// } else {
//     clicks = 1
// }

// Если уже апгрейдился, то только тогда clicks_per_upg будут получать значение из cookie

// Убрано для проверки
// Надо будет ремейкнуть систему получения апгрейдов из cookie (новую систему я вкратце описал выше)
// Кто читает комментарии тот лох

// clicks_per_upg = getCookie('clicks_per_upg')
update_clicks()

function cl__() {
    clicks = +clicks + +clicks_per_upg
    update_clicks()
}

window.onbeforeunload = function() {
        document.cookie = "kega_clicks=" + clicks
        document.cookie = "clicks_per_upg=" + clicks_per_upg
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
}

function buy_upg() {
    if (clicks >= 20) {
        clicks_per_upg++
        clicks -= upgrade_cost
        update_clicks()
        upgrade_cost = Math.round(+upgrade_cost + +(upgrade_cost / 5))
        document.getElementById("upg_kega").textContent = "Улучшить базовую Кегу (" + upgrade_cost + getNoun(upgrade_cost,' Кега', ' Кеги', ' Кег') + ")"
    }
}

function update_clicks() {
    document.getElementById("counter").textContent = "Кег: " + clicks;
}