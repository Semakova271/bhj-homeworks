// Получаем доступ к элементам DOM
const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.book__control_font-size a');

// Функция для обработки изменения размера шрифта
function handleFontSizeChange(event) {
  event.preventDefault();

  // Удаляем класс активности у всех элементов управления размером шрифта
  fontSizeControls.forEach(control => control.classList.remove('font-size_active'));

  // Добавляем класс активности к текущему элементу
  this.classList.add('font-size_active');

  // Получаем размер из атрибута data-size
  const fontSize = this.dataset.size;

  // Удаляем классы размеров шрифта из элемента book
  book.classList.remove('book_fs-small', 'book_fs-big');

  // Добавляем соответствующий класс в зависимости от размера
  if (fontSize === 'small') {
    book.classList.add('book_fs-small');
  } else if (fontSize === 'big') {
    book.classList.add('book_fs-big');
  }
}

// Добавляем обработчики событий для элементов управления размером шрифта
fontSizeControls.forEach(control => control.addEventListener('click', handleFontSizeChange));