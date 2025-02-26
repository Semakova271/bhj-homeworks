// Ключ для сохранения текста в localStorage
const STORAGE_KEY = 'textEditorContent';

// Получаем элемент textarea из DOM
const editor = document.getElementById('editor');

// При загрузке страницы восстанавливаем текст из localStorage
window.addEventListener('load', () => {
  const savedText = localStorage.getItem(STORAGE_KEY);
  if (savedText) {
    editor.value = savedText;
  }
});

// Сохраняем текст в localStorage при каждом изменении в textarea
editor.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, editor.value);
});

// Создаем кнопку для очистки содержимого (повышенный уровень сложности)
const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
document.querySelector('.card').appendChild(clearButton);

// Добавляем обработчик клика на кнопку очистки
clearButton.addEventListener('click', () => {
  editor.value = ''; // Очищаем textarea
  localStorage.removeItem(STORAGE_KEY); // Удаляем текст из localStorage
});

