var clicks = 1
var clicks_per_upg = 1
document.getElementById('kega').setAttribute('draggable', false);

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


if (clicks != 1) {
    clicks = getCookie('kega_clicks')
}

clicks_per_upg = getCookie('clicks_per_upg')
update_clicks()
if (clicks >= 20) {
    document.getElementById("upg_kega").style.visibility = "visible"; // Кнопка апгрейда кеги
}

function cl__() {
    clicks = +clicks + +clicks_per_upg
    update_clicks()
    if (clicks >= 20) {
        document.getElementById("upg_kega").style.visibility = "visible"; // Кнопка апгрейда кеги
    }
    else if (clicks < 20) {
        document.getElementById("upg_kega").style.visibility = "hidden";
    }
}

window.onbeforeunload = function(){
        document.cookie = "kega_clicks=" + clicks
        document.cookie = "clicks_per_upg=" + clicks_per_upg
}

function buy_upg() {
    clicks_per_upg++
    clicks -= 20
    update_clicks()
}

function update_clicks() {
    document.getElementById("counter").textContent = "Нажатий на Кегу: " + clicks;
}