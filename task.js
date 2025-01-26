// Получаем элементы DOM
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.createElement('div'); // Создаем элемент для отображения скорости
clickerSpeed.className = 'clicker__status';
document.querySelector('.clicker').appendChild(clickerSpeed);
let lastClickTime = Date.now(); // Время последнего клика
// Обработчик клика по печеньке
cookie.onclick = function() {
    const currentTime = Date.now();
    const timeDiff = (currentTime - lastClickTime) / 1000; // Разница во времени в секундах
    const speed = 1 / timeDiff; // Скорость кликов в секунду
    // Обновляем счетчик кликов
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;
    // Меняем размер печеньки
    if (cookie.width === 200) {
        cookie.width = 180;
        cookie.height = 180;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
    // Обновляем скорость кликов
    clickerSpeed.textContent = `Скорость клика: ${speed.toFixed(2)} кликов/сек`;
    lastClickTime = currentTime; // Обновляем время последнего клика
};