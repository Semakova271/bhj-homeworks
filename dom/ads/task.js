// Получаем все элементы-ротаторы на странице
const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case'); // Получаем все варианты текста для текущего ротатора
  let activeIndex = 0; // Индекс активного элемента

  function rotate() {
    // Убираем класс активности у предыдущего активного элемента
    cases[activeIndex].classList.remove('rotator__case_active');

    // Переходим к следующему элементу. Если достигли конца, начинаем с начала
    activeIndex = (activeIndex + 1) % cases.length;

    // Добавляем класс активности новому активному элементу
    cases[activeIndex].classList.add('rotator__case_active');

    // Получаем данные из data-атрибутов. Если их нет, используем значения по умолчанию
    const speed = cases[activeIndex].dataset.speed || 1000;
    const color = cases[activeIndex].dataset.color || 'black'; // Цвет по умолчанию

    cases[activeIndex].style.color = color; // устанавливаем цвет текста

    // Запускаем следующий цикл с учетом скорости
    setTimeout(rotate, speed);
  }

  // Запускаем первый цикл ротации для текущего ротатора
  const initialSpeed = cases[activeIndex].dataset.speed || 1000;
  const initialColor = cases[activeIndex].dataset.color || 'black';
  cases[activeIndex].style.color = initialColor;
  setTimeout(rotate, initialSpeed);
});