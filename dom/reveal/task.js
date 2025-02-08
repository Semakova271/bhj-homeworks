// Получаем все элементы с классом 'reveal'
const reveals = document.querySelectorAll('.reveal');

// Функция для проверки, находится ли элемент в поле зрения
function checkReveals() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight; // Высота окна браузера
    const revealTop = reveals[i].getBoundingClientRect().top; // Позиция элемента относительно верха окна
    const revealPoint = 150; // Точка, когда элемент считается видимым (например, 150px от верхнего края)

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('reveal_active'); // Добавляем класс, если элемент виден
    }
  }
}

// Добавляем обработчик события scroll
window.addEventListener('scroll', checkReveals);