// Функция для получения лунки по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
}
// Инициализация счетчиков
let dead = 0;
let lost = 0;
// Функция для обновления счетчиков на странице
function updateStats() {
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}
// Функция для проверки победы или поражения
function checkGameStatus() {
    if (dead === 10) {
        alert('Победа!');
        resetGame();
    } else if (lost === 5) {
        alert('Поражение!');
        resetGame();
    }
}
// Функция для сброса игры
function resetGame() {
    dead = 0;
    lost = 0;
    updateStats();
}
// Добавление обработчиков событий для каждой лунки
for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
        } else {
            lost++;
        }
        updateStats();
        checkGameStatus();
    };
}