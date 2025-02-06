// Получаем элемент для отображения таймера
const timerElement = document.getElementById('timer');
// Устанавливаем начальное время в секундах 
let timeLeft = 59;
// Функция для обновления таймера
function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    // Форматируем время в формат hh:mm:ss
    timerElement.textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // Уменьшаем время на 1 секунду
    timeLeft--;
    // Если время вышло, показываем сообщение и запускаем загрузку файла
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        // Создаем невидимую ссылку для загрузки файла
        const link = document.createElement('a');
        link.href = 'http://example.com/file.zip';
        link.download = 'file.zip';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
// Запускаем таймер с интервалом 1 секунда
const timerInterval = setInterval(updateTimer, 1000);