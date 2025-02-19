document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
  
    tooltipElements.forEach(tooltipElement => {
      let tooltipDiv = null; // Храним ссылку на tooltipDiv для каждого элемента
  
      tooltipElement.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
  
        // Если подсказка уже существует и активна, то закрываем её и удаляем
        if (tooltipDiv && tooltipDiv.classList.contains('tooltip_active')) {
          tooltipDiv.classList.remove('tooltip_active');
          return; // Выходим из функции, чтобы не создавать новую подсказку
        }
  
        // Закрываем все активные подсказки (реализация повышенного уровня сложности #1)
        document.querySelectorAll('.tooltip_active').forEach(activeTooltip => {
          activeTooltip.classList.remove('tooltip_active');
        });
  
        // Создаем элемент подсказки
        tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip';
        tooltipDiv.textContent = tooltipElement.title;
  
        // Добавляем подсказку в body (или в другое место, если нужно)
        document.body.appendChild(tooltipDiv);
  
        // Вычисляем позицию подсказки
        const elementRect = tooltipElement.getBoundingClientRect();
        const tooltipWidth = tooltipDiv.offsetWidth;
        const tooltipHeight = tooltipDiv.offsetHeight;
  
        let top = elementRect.top + window.scrollY;
        let left = elementRect.left + window.scrollX;
  
        // Получаем data-position атрибут (реализация повышенного уровня сложности #2)
        const position = tooltipElement.dataset.position || 'bottom'; // По умолчанию 'bottom'
  
        switch (position) {
          case 'top':
            top = elementRect.top + window.scrollY - tooltipHeight - 5;
            left = elementRect.left + window.scrollX + (elementRect.width - tooltipWidth) / 2;
            break;
          case 'left':
            top = elementRect.top + window.scrollY + (elementRect.height - tooltipHeight) / 2;
            left = elementRect.left + window.scrollX - tooltipWidth - 5;
            break;
          case 'right':
            top = elementRect.top + window.scrollY + (elementRect.height - tooltipHeight) / 2;
            left = elementRect.right + window.scrollX + 5;
            break;
          case 'bottom':
          default: // bottom
            top = elementRect.bottom + window.scrollY + 5;
            left = elementRect.left + window.scrollX + (elementRect.width - tooltipWidth) / 2;
            break;
        }
  
        // Устанавливаем позицию подсказки
        tooltipDiv.style.top = `${top}px`;
        tooltipDiv.style.left = `${left}px`;
  
        // Активируем подсказку
        tooltipDiv.classList.add('tooltip_active');
      });
    });
  });