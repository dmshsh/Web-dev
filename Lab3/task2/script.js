const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === '') {
    return;
  }
  createTodoItem(text);
  input.value = '';
});

function createTodoItem(text) {
  const li = document.createElement('li');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(taskDiv);
  li.appendChild(deleteButton);

  list.appendChild(li);
}
