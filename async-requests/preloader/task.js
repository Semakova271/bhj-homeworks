const itemsNode = document.getElementById('items');
const loaderNode = document.getElementById('loader');

function loadCurrencies() {
  loaderNode.classList.add('loader_active');

  // Проверяем, есть ли данные в localStorage
  const cachedData = localStorage.getItem('currencyData');

  if (cachedData) {
    // Если есть, отображаем их немедленно
    displayCurrencies(JSON.parse(cachedData));
  }

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
      // Сохраняем данные в localStorage
      localStorage.setItem('currencyData', JSON.stringify(data));
      displayCurrencies(data);
    })
    .catch(error => {
      console.error('Ошибка загрузки данных:', error);
      itemsNode.textContent = 'Ошибка загрузки данных.'; // Можно сделать более информативное сообщение об ошибке
    })
    .finally(() => {
      loaderNode.classList.remove('loader_active');
    });
}

function displayCurrencies(data) {
  itemsNode.innerHTML = ''; // Очищаем содержимое itemsNode

  const valute = data.response.Valute;

  for (const code in valute) {
    if (valute.hasOwnProperty(code)) {
      const currency = valute[code];

      const item = document.createElement('div');
      item.classList.add('item');

      const codeNode = document.createElement('div');
      codeNode.classList.add('item__code');
      codeNode.textContent = currency.CharCode;

      const valueNode = document.createElement('div');
      valueNode.classList.add('item__value');
      valueNode.textContent = currency.Value;

      const currencyNode = document.createElement('div');
      currencyNode.classList.add('item__currency');
      currencyNode.textContent = 'руб.';

      item.appendChild(codeNode);
      item.appendChild(valueNode);
      item.appendChild(currencyNode);

      itemsNode.appendChild(item);
    }
  }
}

loadCurrencies();