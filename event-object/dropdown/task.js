// Получаем элемент dropdown и его элементы
const dropdown = document.querySelector('.dropdown');
const dropdownValue = dropdown.querySelector('.dropdown__value');
const dropdownList = dropdown.querySelector('.dropdown__list');

// Обработчик события для открытия/закрытия выпадающего списка
dropdownValue.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown__list_active');
});

// Обработчик события для выбора элемента из выпадающего списка
const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    const selectedValue = item.querySelector('.dropdown__link').textContent; // Получаем текст ссылки
    dropdownValue.textContent = selectedValue; // Устанавливаем новое значение
    dropdownList.classList.remove('dropdown__list_active'); // Закрываем список
  });
});

// Закрытие выпадающего списка при клике вне его
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownList.classList.remove('dropdown__list_active'); // Закрываем список, если кликнули вне его
  }
});