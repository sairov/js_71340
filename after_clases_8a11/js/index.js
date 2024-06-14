const task_form = document.querySelector('#add-task');
const todos = document.querySelector('#todos');

let task_counter = 0;

function createTask(task) {
  const task_container = document.createElement('article');
  task_container.className = 'task';
  task_counter++;
  task_container.id = `task-${task_counter}`;

  task_container.innerHTML = `
    <div>
      <h3>${task.description}</h3>
      <p>${task.deadline}</p>
    </div>
    <p class="${task.status.toLowerCase()}">${task.status}</p>
    <button id="btn-${task_counter}" class="btn-delete" type="button">Eliminar</button>
  `;

  todos.appendChild(task_container);

  const deleteButton = document.querySelector(`#btn-${task_counter}`);
  deleteButton.addEventListener('click', () => {
    document.querySelector(`#task-${task_counter}`).remove();
  })
};



task_form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = {
    description: e.target[0].value,
    deadline: e.target[1].value,
    status: e.target[2].value
  };

  createTask(task);

  task_form.reset();
});