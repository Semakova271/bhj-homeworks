document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    // Проверяем localStorage на наличие сохраненного user_id при загрузке страницы
    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        // Если user_id есть, показываем блок приветствия
        userIdSpan.textContent = savedUserId;
        showWelcome();
    } else {
        // Иначе показываем форму авторизации
        showSignin();
    }

    // Обработчик отправки формы
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Создаем объект FormData из формы
        const formData = new FormData(signinForm);

        // Отправляем POST-запрос на сервер
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Парсим ответ в формате JSON
        .then(data => {
            if (data.success) {
                // Если авторизация успешна
                const userId = data.user_id;

                // Сохраняем user_id в localStorage
                localStorage.setItem('user_id', userId);

                // Обновляем текст в блоке приветствия
                userIdSpan.textContent = userId;

                // Показываем блок приветствия
                showWelcome();

                // Очищаем поля формы
                signinForm.reset();
            } else {
                // Если авторизация не удалась, выводим сообщение об ошибке
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    });

    // Функция для показа формы авторизации
    function showSignin() {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
    }

    // Функция для показа блока приветствия
    function showWelcome() {
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }

    // Добавляем возможность деавторизации
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Выйти';
    logoutButton.classList.add('btn');
    logoutButton.style.marginTop = '20px';

    logoutButton.addEventListener('click', function() {
        // Удаляем user_id из localStorage
        localStorage.removeItem('user_id');

        // Показываем форму авторизации
        showSignin();
    });

    // Добавляем кнопку выхода в блок приветствия
    welcomeBlock.appendChild(logoutButton);
});
