const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    createTaskElement(taskText);
    taskInput.value = '';
  }
}

function createTaskElement(taskText) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const taskTitleElement = document.createElement('div');
  taskTitleElement.classList.add('task__title');
  taskTitleElement.textContent = taskText;

  const taskRemoveElement = document.createElement('a');
  taskRemoveElement.classList.add('task__remove');
  taskRemoveElement.href = '#';
  taskRemoveElement.textContent = '×';

  taskRemoveElement.addEventListener('click', removeTask);

  taskElement.appendChild(taskTitleElement);
  taskElement.appendChild(taskRemoveElement);

  taskList.appendChild(taskElement);
}

function removeTask(event) {
  event.preventDefault();
  const taskElement = event.target.parentNode;
  taskElement.remove();
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(event);
    }
});
