document.addEventListener("DOMContentLoaded", function () {
    // Находим все вкладки и содержимое вкладок
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    // Функция для обработки переключения вкладок
    function switchTab(index) {
        // Убираем активный класс у всех вкладок и содержимого
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tabContents.forEach(content => content.classList.remove('tab__content_active'));

        // Устанавливаем активный класс для выбранной вкладки и соответствующего контента
        tabs[index].classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
    }

    // Добавляем обработчики событий для каждой вкладки
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => switchTab(index));
    });
});